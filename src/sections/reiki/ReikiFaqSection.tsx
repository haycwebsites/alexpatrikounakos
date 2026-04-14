import { FaqCollapse } from '../../components/FaqCollapse';
import { useHayc } from '../../hayc/config-context';

export default function ReikiFaqSection() {
  const { t, config, cp } = useHayc();
  const faq = config.reikiPageConfig.faq;
  const left = faq.items.slice(0, 3);
  const right = faq.items.slice(3, 6);

  const renderItem = (item: (typeof faq.items)[0], idx: number) => {
    return (
      <FaqCollapse
        key={item.id}
        id={item.id}
        defaultOpen={item.defaultOpen === true}
        className="lc-block mb-5 border p-3"
        headerClassName={(open) =>
          `fw-bold text-decoration-none text-dark lead${open ? '' : ' collapsed'}`
        }
        bodyClassName="py-4 text-dark"
        header={
          <span {...cp(`reikiPageConfig.faq.items.${idx}.question`)}>
            {t(item.question)}
          </span>
        }
      >
        <span {...cp(`reikiPageConfig.faq.items.${idx}.answer`)}>
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
              <h2 className="fw-bold" {...cp('reikiPageConfig.faq.title')}>
                {t(faq.title)}
              </h2>
            </div>
            <div className="lc-block text-center">
              <p {...cp('reikiPageConfig.faq.subtitle')}>{t(faq.subtitle)}</p>
            </div>
          </div>
        </div>
        <div className="row fontStyle">
          <div className="col-md-6">
            {left.map((item, i) => renderItem(item, i))}
          </div>
          <div className="col-md-6">
            {right.map((item, i) => renderItem(item, i + 3))}
          </div>
        </div>
      </div>
    </section>
  );
}
