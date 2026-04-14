import { useEffect, useId, useLayoutEffect, useRef, useState } from 'react';

type Props = {
  id?: string;
  header: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  headerClassName?: string | ((open: boolean) => string);
  bodyClassName?: string;
};

export function FaqCollapse({
  id,
  header,
  children,
  defaultOpen = false,
  className,
  headerClassName,
  bodyClassName,
}: Props) {
  const autoId = useId();
  const panelId = id ?? `faq-${autoId}`;
  const [open, setOpen] = useState(defaultOpen);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);

  const measure = () => {
    const el = innerRef.current;
    if (!el) return;
    setMaxHeight(el.scrollHeight);
  };

  useLayoutEffect(() => {
    measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);

  useEffect(() => {
    if (!open) return;
    // Re-measure after fonts/images settle
    const t = window.setTimeout(measure, 50);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={className}>
      <a
        href={`#${panelId}`}
        role="button"
        aria-expanded={open}
        aria-controls={panelId}
        className={typeof headerClassName === 'function' ? headerClassName(open) : headerClassName}
        onClick={(e) => {
          e.preventDefault();
          setOpen((v) => !v);
        }}
      >
        {header}
      </a>

      <div
        id={panelId}
        style={{
          maxHeight: open ? maxHeight : 0,
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 260ms ease, opacity 200ms ease',
        }}
        aria-hidden={!open}
      >
        <div ref={innerRef} className={bodyClassName}>
          {children}
        </div>
      </div>
    </div>
  );
}

