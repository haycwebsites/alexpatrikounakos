import { FaqCollapse } from '../../components/FaqCollapse';
import { useHayc } from '../../hayc/config-context';

export default function CacaoFaqSection() {
  const { t, config, cp } = useHayc();
  const faq = config.cacaoPageConfig.faq;
  const left = faq.items.slice(0, 4);
  const right = faq.items.slice(4, 7);

  const renderItem = (item: (typeof faq.items)[0], idx: number) => {
    // Keep the exact anchor class behavior from the provided HTML:
    // - `FaqCollapse1` and `FaqCollapse3` have `collapsed` on the trigger even though `FaqCollapse1` is open.
    const collapsedClass =
      item.id === 'FaqCollapse1' || item.id === 'FaqCollapse3' ? ' collapsed' : '';
    return (
      <FaqCollapse
        key={item.id}
        id={item.id}
        defaultOpen={item.defaultOpen === true}
        className="lc-block mb-5 border p-3"
        headerClassName={`fw-bold text-decoration-none text-dark lead${collapsedClass}`}
        bodyClassName="py-4 text-dark"
        header={
          <span {...cp(`cacaoPageConfig.faq.items.${idx}.question`)}>
            {t(item.question)}
          </span>
        }
      >
        <span {...cp(`cacaoPageConfig.faq.items.${idx}.answer`)}>
          {t(item.answer)}
        </span>
      </FaqCollapse>
    );
  };

  return (
    <section className="padding-medium">
      <div className="container-md">
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="lc-block text-center">
              <h2 className="fw-bold" {...cp('cacaoPageConfig.faq.title')}>
                {t(faq.title)}
              </h2>
            </div>
            <div className="lc-block text-center">
              <p {...cp('cacaoPageConfig.faq.subtitle')}>{t(faq.subtitle)}</p>
            </div>
          </div>
        </div>

        <div className="row fontStyle">
          <div className="col-md-6">
            {left.map((item, i) => renderItem(item, i))}
          </div>
          <div className="col-md-6">
            {right.map((item, i) => renderItem(item, i + left.length))}
          </div>
        </div>
      </div>
    </section>
  );
}

