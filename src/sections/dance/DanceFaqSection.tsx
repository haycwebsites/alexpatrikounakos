import { FaqCollapse } from '../../components/FaqCollapse';
import { useHayc } from '../../hayc/config-context';

export default function DanceFaqSection() {
  const { t, config, cp } = useHayc();
  const faq = config.dancePageConfig.faq;
  const left = faq.items.slice(0, 4);
  const right = faq.items.slice(4, 8);

  const renderItem = (item: (typeof faq.items)[0], idx: number, rounded: boolean) => (
    <FaqCollapse
      key={item.id}
      id={item.id}
      defaultOpen={item.defaultOpen === true}
      className={`lc-block mb-5 border${rounded ? ' rounded' : ''} p-3`}
      headerClassName={`fw-bold text-decoration-none text-dark lead${
        item.collapsedClass ? ' collapsed' : ''
      }`}
      bodyClassName="py-4 text-dark"
      header={<span {...cp(`dancePageConfig.faq.items.${idx}.question`)}>{t(item.question)}</span>}
    >
      <span {...cp(`dancePageConfig.faq.items.${idx}.answer`)}>{t(item.answer)}</span>
    </FaqCollapse>
  );

  return (
    <section className="padding-medium">
      <div className="container-md">
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="lc-block text-center">
              <div>
                <h2 className="fw-bold" {...cp('dancePageConfig.faq.title')}>
                  {t(faq.title)}
                </h2>
              </div>
            </div>
            <div className="lc-block text-center">
              <div {...cp('dancePageConfig.faq.subtitle')}>{t(faq.subtitle)}</div>
            </div>
          </div>
        </div>

        <div className="row fontStyle">
          <div className="col-md-6">
            {left.map((item, i) => renderItem(item, i, false))}
          </div>
          <div className="col-md-6">
            {right.map((item, i) => renderItem(item, i + left.length, false))}
          </div>
        </div>
      </div>
    </section>
  );
}

