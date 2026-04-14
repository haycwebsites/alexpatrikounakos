import { FaqCollapse } from '../../components/FaqCollapse';
import { useHayc } from '../../hayc/config-context';

export default function SeminarsFaqSection() {
  const { t, config, cp } = useHayc();
  const faq = config.seminarsPageConfig.faq;
  const left = faq.items.slice(0, 4);
  const right = faq.items.slice(4, 7);

  const renderItem = (item: (typeof faq.items)[0], idx: number) => {
    const collapsedClass = item.collapsedClass ? ' collapsed' : '';
    return (
      <FaqCollapse
        key={item.id}
        id={item.id}
        defaultOpen={item.defaultOpen === true}
        className="lc-block mb-5 border p-3"
        headerClassName={`fw-bold text-decoration-none text-dark lead${collapsedClass}`}
        bodyClassName="py-4 text-dark"
        header={
          <span
            data-editable="inline"
            {...cp(`seminarsPageConfig.faq.items.${idx}.question`)}
          >
            {t(item.question)}
          </span>
        }
      >
        <span
          data-editable="rich"
          {...cp(`seminarsPageConfig.faq.items.${idx}.answer`)}
        >
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
              <div data-editable="rich">
                <h2 className="fw-bold" {...cp('seminarsPageConfig.faq.title')}>
                  {t(faq.title)}
                </h2>
              </div>
            </div>
            <div className="lc-block text-center">
              <div data-editable="rich">
                <p {...cp('seminarsPageConfig.faq.subtitle')}>{t(faq.subtitle)}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row fontStyle">
          <div className="col-md-6">{left.map((item, i) => renderItem(item, i))}</div>
          <div className="col-md-6">
            {right.map((item, i) => renderItem(item, i + left.length))}
          </div>
        </div>
      </div>
    </section>
  );
}

