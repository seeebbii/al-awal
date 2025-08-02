/**
 * Modern Swiper Component
 * Optimized for performance and accessibility
 * Compatible with existing site libraries
 */

(function() {
    'use strict';
    
    // Configuration object - easily customizable
    const SWIPER_CONFIG = {
        // Basic settings
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true,
        },
        speed: 800,
        
        // Effects - can be changed to 'slide', 'fade', 'cube', 'coverflow', 'flip'
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        
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
                return '<span class="' + className + '" aria-label="Go to slide ' + (index + 1) + '"></span>';
            },
        },
        
        // Responsive breakpoints
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
                autoplay: {
                    delay: 4000,
                },
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                    delay: 5000,
                },
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: {
                    delay: 5000,
                },
            }
        },
        
        // Accessibility
        a11y: {
            enabled: true,
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            notificationClass: 'swiper-notification',
        },
        
        // Keyboard control
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        
        // Mouse wheel control (optional - uncomment to enable)
        // mousewheel: {
        //     invert: false,
        //     forceToAxis: false,
        //     sensitivity: 1,
        //     releaseOnEdges: true,
        // },
        
        // Lazy loading (useful if you add images)
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: false,
            preloaderClass: 'swiper-lazy-preloader',
            checkInView: true,
        },
        
        // Performance optimizations
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        preloadImages: false,
        updateOnImagesReady: true,
        
        // Touch settings
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,
        touchMoveStopPropagation: false,
        
        // Events
        on: {
            init: function () {
                console.log('Swiper initialized successfully');
                this.el.setAttribute('aria-label', 'Image carousel with ' + this.slides.length + ' slides');
                
                // Add custom classes for styling
                this.el.classList.add('swiper-initialized');
                
                // Announce to screen readers
                this.a11y.liveRegion.innerHTML = 'Carousel with ' + this.slides.length + ' slides initialized';
            },
            
            slideChange: function () {
                const currentSlide = this.activeIndex;
                const totalSlides = this.slides.length;
                
                // Update aria-live region for screen readers
                if (this.a11y.liveRegion) {
                    this.a11y.liveRegion.innerHTML = `Slide ${currentSlide + 1} of ${totalSlides}`;
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
                const event = new CustomEvent('swiperSlideChange', {
                    detail: {
                        currentSlide: currentSlide,
                        totalSlides: totalSlides,
                        swiper: this
                    }
                });
                this.el.dispatchEvent(event);
            },
            
            slideChangeTransitionStart: function () {
                // Add loading state to improve perceived performance
                this.slides[this.activeIndex].classList.add('slide-transition');
            },
            
            slideChangeTransitionEnd: function () {
                // Remove loading state
                this.slides.forEach(slide => {
                    slide.classList.remove('slide-transition');
                });
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
    
    // Initialize swiper when DOM is ready
    function initializeSwiper() {
        // Check if Swiper is available
        if (typeof Swiper === 'undefined') {
            console.error('Swiper library not found. Please make sure swiper-bundle.min.js is loaded.');
            return;
        }
        
        // Find swiper containers
        const swiperContainers = document.querySelectorAll('.modern-swiper');
        
        if (swiperContainers.length === 0) {
            console.warn('No swiper containers found with class .modern-swiper');
            return;
        }
        
        // Initialize each swiper
        swiperContainers.forEach((container, index) => {
            // Create unique ID if not present
            if (!container.id) {
                container.id = 'modern-swiper-' + index;
            }
            
            // Initialize Swiper
            const swiper = new Swiper(container, SWIPER_CONFIG);
            
            // Store reference for external access
            container.swiperInstance = swiper;
            
            // Add hover pause functionality
            setupHoverControls(container, swiper);
            
            // Add touch gesture enhancements
            setupTouchGestures(container, swiper);
            
            // Add intersection observer for performance
            setupIntersectionObserver(container, swiper);
            
            console.log('Swiper #' + container.id + ' initialized');
        });
    }
    
    // Setup hover controls for autoplay
    function setupHoverControls(container, swiper) {
        if (!swiper.autoplay) return;
        
        container.addEventListener('mouseenter', () => {
            swiper.autoplay.stop();
            container.classList.add('swiper-paused');
        });
        
        container.addEventListener('mouseleave', () => {
            swiper.autoplay.start();
            container.classList.remove('swiper-paused');
        });
        
        // Also handle focus for keyboard users
        container.addEventListener('focusin', () => {
            swiper.autoplay.stop();
        });
        
        container.addEventListener('focusout', () => {
            // Small delay to check if focus moved to another element within swiper
            setTimeout(() => {
                if (!container.contains(document.activeElement)) {
                    swiper.autoplay.start();
                }
            }, 100);
        });
    }
    
    // Setup enhanced touch gestures
    function setupTouchGestures(container, swiper) {
        let startY = 0;
        let startTime = 0;
        
        container.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
            startTime = Date.now();
        }, { passive: true });
        
        container.addEventListener('touchend', (e) => {
            const endY = e.changedTouches[0].clientY;
            const endTime = Date.now();
            const diffY = startY - endY;
            const diffTime = endTime - startTime;
            
            // Prevent accidental swipes (require minimum distance and reasonable time)
            if (Math.abs(diffY) > 50 && diffTime < 500) {
                if (diffY > 0) {
                    swiper.slideNext();
                } else {
                    swiper.slidePrev();
                }
            }
        }, { passive: true });
    }
    
    // Setup intersection observer for performance optimization
    function setupIntersectionObserver(container, swiper) {
        if (!('IntersectionObserver' in window)) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Swiper is visible, start autoplay
                    if (swiper.autoplay && !swiper.autoplay.running) {
                        swiper.autoplay.start();
                    }
                    container.classList.add('swiper-in-view');
                } else {
                    // Swiper is not visible, stop autoplay to save resources
                    if (swiper.autoplay && swiper.autoplay.running) {
                        swiper.autoplay.stop();
                    }
                    container.classList.remove('swiper-in-view');
                }
            });
        }, {
            threshold: 0.3, // Trigger when 30% of swiper is visible
            rootMargin: '50px 0px' // Start/stop 50px before/after entering viewport
        });
        
        observer.observe(container);
        
        // Store observer reference for cleanup
        container.swiperObserver = observer;
    }
    
    // Utility function to update swiper configuration
    window.updateSwiperConfig = function(newConfig) {
        Object.assign(SWIPER_CONFIG, newConfig);
        console.log('Swiper configuration updated');
    };
    
    // Utility function to get swiper instance
    window.getSwiperInstance = function(containerId) {
        const container = document.getElementById(containerId) || document.querySelector('.modern-swiper');
        return container ? container.swiperInstance : null;
    };
    
    // Utility function to destroy all swipers (for cleanup)
    window.destroySwipers = function() {
        document.querySelectorAll('.modern-swiper').forEach(container => {
            if (container.swiperInstance) {
                container.swiperInstance.destroy(true, true);
            }
            if (container.swiperObserver) {
                container.swiperObserver.disconnect();
            }
        });
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeSwiper);
    } else {
        // DOM is already ready
        initializeSwiper();
    }
    
    // Also initialize on window load as fallback
    window.addEventListener('load', () => {
        // Only initialize if not already done
        if (!document.querySelector('.modern-swiper .swiper-initialized')) {
            initializeSwiper();
        }
    });
    
    // Handle dynamic content loading (if using AJAX)
    window.addEventListener('swiperReinit', initializeSwiper);
    
})();

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeSwiper: initializeSwiper,
        updateSwiperConfig: updateSwiperConfig,
        getSwiperInstance: getSwiperInstance,
        destroySwipers: destroySwipers
    };
}