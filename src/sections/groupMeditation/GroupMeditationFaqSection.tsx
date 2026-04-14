import { FaqCollapse } from '../../components/FaqCollapse';
import { useHayc } from '../../hayc/config-context';

export default function GroupMeditationFaqSection() {
  const { t, config, cp } = useHayc();
  const faq = config.groupMeditationPageConfig.faq;
  const left = faq.items.slice(0, 6);
  const right = faq.items.slice(6, 12);

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
            {...cp(`groupMeditationPageConfig.faq.items.${idx}.question`)}
          >
            {t(item.question)}
          </span>
        }
      >
        <span
          data-editable="rich"
          {...cp(`groupMeditationPageConfig.faq.items.${idx}.answer`)}
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
                <h2 className="fw-bold" {...cp('groupMeditationPageConfig.faq.title')}>
                  {t(faq.title)}
                </h2>
              </div>
            </div>
            <div className="lc-block text-center">
              <div data-editable="rich">
                <p {...cp('groupMeditationPageConfig.faq.subtitle')}>{t(faq.subtitle)}</p>
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

