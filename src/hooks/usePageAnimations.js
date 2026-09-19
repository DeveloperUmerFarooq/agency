import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function usePageAnimations(rootRef) {
  useLayoutEffect(() => {
    if (!rootRef.current) return undefined

    const context = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set('[data-reveal], .capability-card', { opacity: 1, y: 0 })
        return
      }

      gsap.from('.hero-kicker, .hero-title .line, .hero-copy, .hero-actions, .hero-proof', {
        y: 42, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.11, delay: 0.2,
      })

      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(element, { y: 56, opacity: 0 }, {
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: { trigger: element, start: 'top 92%', end: 'top 68%', scrub: 0.65, invalidateOnRefresh: true },
        })
      })

      gsap.utils.toArray('.capability-card').forEach((card) => {
        gsap.fromTo(card, { y: 70, opacity: 0 }, {
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: { trigger: card, start: 'top 94%', end: 'top 70%', scrub: 0.55, invalidateOnRefresh: true },
        })
      })

      gsap.to('.hero-content', {
        yPercent: -8, opacity: 0.28, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: '70% top', scrub: 0.8 },
      })
      gsap.to('.orb', {
        yPercent: 18, rotate: 18, ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.2 },
      })
      gsap.to('.security-command', {
        yPercent: -8, rotate: 1.2, ease: 'none',
        scrollTrigger: { trigger: '.security-services', start: 'top bottom', end: 'bottom top', scrub: 0.8 },
      })
      gsap.fromTo('.process-line-fill', { scaleY: 0 }, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: '.approach', start: 'top 72%', end: 'bottom 68%', scrub: 0.75 },
      })

      gsap.utils.toArray('.process-item').forEach((item) => {
        gsap.fromTo(item.querySelector('.process-card'), { scale: 0.965, rotateX: 2.5 }, {
          scale: 1,
          rotateX: 0,
          ease: 'none',
          scrollTrigger: { trigger: item, start: 'top 90%', end: 'top 54%', scrub: 0.65 },
        })
        gsap.fromTo(item.querySelector('.process-node i'), { scale: 0.65 }, {
          scale: 1.55,
          ease: 'none',
          scrollTrigger: { trigger: item, start: 'top 82%', end: 'top 58%', scrub: 0.5 },
        })
      })
    }, rootRef)

    return () => context.revert()
  }, [rootRef])
}
