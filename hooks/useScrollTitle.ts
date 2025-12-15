
import { useEffect, useRef } from 'react';

const SECTION_TITLES: Record<string, string> = {
  'header': 'Unlawful Disclosure Guide (SA)',
  'why-this-matters': 'Why This Matters - Safety Guide',
  'success-story': 'Case Study: Janette - Safety Guide',
  'immediate-action': 'Phase 1: Immediate Action - Safety Guide',
  'legal-strategy': 'Legal Strategy Dashboard - Safety Guide',
  'support-network': 'Support Network - Safety Guide',
  'contact-form': 'Contact Us - Safety Guide'
};

export const useScrollTitle = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (SECTION_TITLES[id]) {
            document.title = SECTION_TITLES[id];
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Triggers when the element is in the middle 20% of screen
      threshold: 0
    });

    const sections = document.querySelectorAll('section, header');
    sections.forEach((section) => {
      if (section.id) {
        observerRef.current?.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
};
