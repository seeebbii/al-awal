/**
 * Card Swiper Gallery
 * Optimized for performance with beautiful stacked card effects
 * Compatible with existing site libraries
 */

(function() {
    'use strict';
    
    // Configuration object - easily customizable
    const CARD_GALLERY_CONFIG = {
        // Basic settings
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        
        // Coverflow effect settings for stacked cards
        coverflowEffect: {
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows: false,
        },
        
        // Autoplay
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true,
        },
        
        // Speed and easing
        speed: 800,
        
        // Navigation
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: 'swiper-button-disabled',
        },
        
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
            renderBullet: function (index, className) {
                return '<span class="' + className + '" aria-label="Go to card ' + (index + 1) + '"></span>';
            },
        },
        
        // Keyboard control
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        
        // Mouse wheel control
        mousewheel: {
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            releaseOnEdges: true,
        },
        
        // Responsive breakpoints
        breakpoints: {
            320: {
                coverflowEffect: {
                    stretch: 60,
                    depth: 100,
                    modifier: 1.2,
                },
                autoplay: {
                    delay: 3500,
                },
            },
            768: {
                coverflowEffect: {
                    stretch: 80,
                    depth: 125,
                    modifier: 1.3,
                },
                autoplay: {
                    delay: 4000,
                },
            },
            1024: {
                coverflowEffect: {
                    stretch: 100,
                    depth: 150,
                    modifier: 1.5,
                },
                autoplay: {
                    delay: 4000,
                },
            }
        },
        
        // Accessibility
        a11y: {
            enabled: true,
            prevSlideMessage: 'Previous card',
            nextSlideMessage: 'Next card',
            firstSlideMessage: 'This is the first card',
            lastSlideMessage: 'This is the last card',
            paginationBulletMessage: 'Go to card {{index}}',
            notificationClass: 'swiper-notification',
        },
        
        // Performance optimizations
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        preloadImages: false,
        updateOnImagesReady: true,
        
        // Touch settings
        touchRatio: 1,
        touchAngle: 45,
        touchMoveStopPropagation: false,
        
        // Events
        on: {
            init: function () {
                console.log('Card gallery initialized successfully');
                this.el.setAttribute('aria-label', 'Card gallery with ' + this.slides.length + ' cards');
                
                // Add custom classes for styling
                this.el.classList.add('swiper-initialized');
                
                // Add loading animation to cards
                this.slides.forEach((slide, index) => {
                    slide.style.setProperty('--slide-index', index);
                    slide.classList.add('card-loading');
                });
                
                // Announce to screen readers
                if (this.a11y.liveRegion) {
                    this.a11y.liveRegion.innerHTML = 'Card gallery with ' + this.slides.length + ' cards initialized';
                }
            },
            
            slideChange: function () {
                const currentSlide = this.activeIndex;
                const totalSlides = this.slides.length;
                
                // Update aria-live region for screen readers
                if (this.a11y.liveRegion) {
                    this.a11y.liveRegion.innerHTML = `Card ${currentSlide + 1} of ${totalSlides}`;
                }
                
                // Remove hover effects from all cards when sliding
                this.slides.forEach(slide => {
                    slide.classList.remove('hover-active');
                });
                
                // Add entrance animation to active slide
                const activeSlide = this.slides[this.activeIndex];
                if (activeSlide) {
                    activeSlide.classList.add('slide-active');
                }
                
                // Pause videos in non-active slides (if any)
                this.slides.forEach((slide, index) => {
                    const videos = slide.querySelectorAll('video');
                    videos.forEach(video => {
                        if (index !== this.activeIndex) {
                            video.pause();
                        }
                    });
                });
                
                // Custom event for external listeners
                const event = new CustomEvent('cardSlideChange', {
                    detail: {
                        activeIndex: this.activeIndex,
                        activeSlide: activeSlide,
                        totalSlides: totalSlides,
                        swiper: this
                    }
                });
                this.el.dispatchEvent(event);
            },
            
            slideChangeTransitionStart: function () {
                // Add transition state to improve perceived performance
                this.slides[this.activeIndex].classList.add('card-slide-transition');
            },
            
            slideChangeTransitionEnd: function () {
                // Remove transition state
                this.slides.forEach(slide => {
                    slide.classList.remove('card-slide-transition');
                });
                
                console.log('Card transition completed');
            },
            
            autoplayTimeLeft: function (timeLeft, percentage) {
                // Optional: Show autoplay progress
                const progressBar = this.el.querySelector('.autoplay-progress');
                if (progressBar) {
                    progressBar.style.width = (100 - percentage * 100) + '%';
                }
            },
            
            resize: function () {
                // Handle responsive updates
                this.update();
            }
        }
    };
    
    // Initialize card gallery when DOM is ready
    function initializeCardGallery() {
        // Check if Swiper is available
        if (typeof Swiper === 'undefined') {
            console.error('Swiper library not found. Please make sure swiper-bundle.min.js is loaded.');
            return;
        }
        
        // Find card gallery containers
        const galleryContainers = document.querySelectorAll('.card-swiper');
        
        if (galleryContainers.length === 0) {
            console.warn('No card gallery containers found with class .card-swiper');
            return;
        }
        
        // Initialize each gallery
        galleryContainers.forEach((container, index) => {
            // Create unique ID if not present
            if (!container.id) {
                container.id = 'card-gallery-' + index;
            }
            
            // Initialize Swiper
            const swiper = new Swiper(container, CARD_GALLERY_CONFIG);
            
            // Store reference for external access
            container.swiperInstance = swiper;
            
            // Add enhanced interactions
            setupCardInteractions(container, swiper);
            
            // Add hover controls
            setupHoverControls(container, swiper);
            
            // Add keyboard shortcuts
            setupKeyboardControls(container, swiper);
            
            // Add intersection observer for performance
            setupIntersectionObserver(container, swiper);
            
            console.log('Card gallery #' + container.id + ' initialized');
        });
    }
    
    // Setup card interactions (hover, click, focus)
    function setupCardInteractions(container, swiper) {
        const cards = container.querySelectorAll('.card-slide');
        
        cards.forEach((card, index) => {
            // Enhanced hover effects
            card.addEventListener('mouseenter', function() {
                if (this.classList.contains('swiper-slide-active')) {
                    this.classList.add('hover-active');
                    // Pause autoplay on hover
                    swiper.autoplay.stop();
                }
            });

            card.addEventListener('mouseleave', function() {
                this.classList.remove('hover-active');
                // Resume autoplay
                if (!container.matches(':hover')) {
                    swiper.autoplay.start();
                }
            });

            // Click to navigate to specific card
            card.addEventListener('click', function(e) {
                e.preventDefault();
                const slideIndex = Array.from(card.parentNode.children).indexOf(card);
                swiper.slideTo(slideIndex);
                
                // Focus the card for accessibility
                setTimeout(() => {
                    card.focus();
                }, 300);
            });
            
            // Focus events for accessibility
            card.addEventListener('focus', function() {
                if (!this.classList.contains('swiper-slide-active')) {
                    const slideIndex = Array.from(card.parentNode.children).indexOf(card);
                    swiper.slideTo(slideIndex);
                }
            });
            
            // Touch events for mobile enhancement
            let touchStartTime = 0;
            let touchStartY = 0;
            
            card.addEventListener('touchstart', function(e) {
                touchStartTime = Date.now();
                touchStartY = e.touches[0].clientY;
            }, { passive: true });
            
            card.addEventListener('touchend', function(e) {
                const touchEndTime = Date.now();
                const touchEndY = e.changedTouches[0].clientY;
                const touchDuration = touchEndTime - touchStartTime;
                const touchDistance = Math.abs(touchEndY - touchStartY);
                
                // Quick tap gesture
                if (touchDuration < 200 && touchDistance < 10) {
                    const slideIndex = Array.from(card.parentNode.children).indexOf(card);
                    swiper.slideTo(slideIndex);
                }
            }, { passive: true });
        });
    }
    
    // Setup hover controls for autoplay
    function setupHoverControls(container, swiper) {
        if (!swiper.autoplay) return;
        
        container.addEventListener('mouseenter', () => {
            swiper.autoplay.stop();
            container.classList.add('gallery-paused');
        });
        
        container.addEventListener('mouseleave', () => {
            swiper.autoplay.start();
            container.classList.remove('gallery-paused');
        });
        
        // Also handle focus for keyboard users
        container.addEventListener('focusin', () => {
            swiper.autoplay.stop();
        });
        
        container.addEventListener('focusout', () => {
            // Small delay to check if focus moved to another element within gallery
            setTimeout(() => {
                if (!container.contains(document.activeElement)) {
                    swiper.autoplay.start();
                }
            }, 100);
        });
    }
    
    // Setup enhanced keyboard controls
    function setupKeyboardControls(container, swiper) {
        const keyboardHandler = function(e) {
            // Only handle if gallery is in focus or visible
            if (!container.contains(document.activeElement) && 
                !isElementInViewport(container)) {
                return;
            }
            
            switch(e.key) {
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    swiper.slidePrev();
                    break;
                    
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault();
                    swiper.slideNext();
                    break;
                    
                case ' ':
                case 'Spacebar':
                    e.preventDefault();
                    if (swiper.autoplay.running) {
                        swiper.autoplay.stop();
                    } else {
                        swiper.autoplay.start();
                    }
                    break;
                    
                case 'Home':
                    e.preventDefault();
                    swiper.slideTo(0);
                    break;
                    
                case 'End':
                    e.preventDefault();
                    swiper.slideTo(swiper.slides.length - 1);
                    break;
                    
                case 'Enter':
                    if (document.activeElement.classList.contains('card-slide')) {
                        e.preventDefault();
                        // Trigger card action if needed
                        const event = new CustomEvent('cardActivated', {
                            detail: { 
                                card: document.activeElement,
                                swiper: swiper 
                            }
                        });
                        container.dispatchEvent(event);
                    }
                    break;
            }
        };
        
        document.addEventListener('keydown', keyboardHandler);
        
        // Store handler reference for cleanup
        container.keyboardHandler = keyboardHandler;
    }
    
    // Setup intersection observer for performance optimization
    function setupIntersectionObserver(container, swiper) {
        if (!('IntersectionObserver' in window)) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Gallery is visible, start autoplay
                    if (swiper.autoplay && !swiper.autoplay.running) {
                        swiper.autoplay.start();
                    }
                    container.classList.add('gallery-in-view');
                    
                    // Trigger entrance animations
                    const cards = container.querySelectorAll('.card-slide');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('card-visible');
                        }, index * 100);
                    });
                } else {
                    // Gallery is not visible, stop autoplay to save resources
                    if (swiper.autoplay && swiper.autoplay.running) {
                        swiper.autoplay.stop();
                    }
                    container.classList.remove('gallery-in-view');
                }
            });
        }, {
            threshold: 0.3, // Trigger when 30% of gallery is visible
            rootMargin: '50px 0px' // Start/stop 50px before/after entering viewport
        });
        
        observer.observe(container);
        
        // Store observer reference for cleanup
        container.intersectionObserver = observer;
    }
    
    // Utility function to check if element is in viewport
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Utility function to update gallery configuration
    window.updateCardGalleryConfig = function(newConfig) {
        Object.assign(CARD_GALLERY_CONFIG, newConfig);
        console.log('Card gallery configuration updated');
    };
    
    // Utility function to get gallery instance
    window.getCardGalleryInstance = function(containerId) {
        const container = document.getElementById(containerId) || document.querySelector('.card-swiper');
        return container ? container.swiperInstance : null;
    };
    
    // Utility function to navigate to specific card
    window.navigateToCard = function(cardIndex, containerId) {
        const container = containerId ? 
            document.getElementById(containerId) : 
            document.querySelector('.card-swiper');
            
        if (container && container.swiperInstance) {
            container.swiperInstance.slideTo(cardIndex);
            return true;
        }
        return false;
    };
    
    // Utility function to toggle autoplay
    window.toggleCardGalleryAutoplay = function(containerId) {
        const container = containerId ? 
            document.getElementById(containerId) : 
            document.querySelector('.card-swiper');
            
        if (container && container.swiperInstance) {
            const swiper = container.swiperInstance;
            if (swiper.autoplay.running) {
                swiper.autoplay.stop();
                return false;
            } else {
                swiper.autoplay.start();
                return true;
            }
        }
        return null;
    };
    
    // Utility function to destroy all galleries (for cleanup)
    window.destroyCardGalleries = function() {
        document.querySelectorAll('.card-swiper').forEach(container => {
            if (container.swiperInstance) {
                container.swiperInstance.destroy(true, true);
            }
            if (container.intersectionObserver) {
                container.intersectionObserver.disconnect();
            }
            if (container.keyboardHandler) {
                document.removeEventListener('keydown', container.keyboardHandler);
            }
        });
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeCardGallery);
    } else {
        // DOM is already ready
        initializeCardGallery();
    }
    
    // Also initialize on window load as fallback
    window.addEventListener('load', () => {
        // Only initialize if not already done
        if (!document.querySelector('.card-swiper .swiper-initialized')) {
            initializeCardGallery();
        }
    });
    
    // Handle dynamic content loading (if using AJAX)
    window.addEventListener('cardGalleryReinit', initializeCardGallery);
    
})();

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeCardGallery: initializeCardGallery,
        updateCardGalleryConfig: updateCardGalleryConfig,
        getCardGalleryInstance: getCardGalleryInstance,
        navigateToCard: navigateToCard,
        toggleCardGalleryAutoplay: toggleCardGalleryAutoplay,
        destroyCardGalleries: destroyCardGalleries
    };
}