import { PageConfig } from "case-web-app-core/build/types/pagesConfig"
import { infoPageLayout } from "../../../../../layout/pages/infoPageLayout"
import { pageSection } from "../../../../../layout/rows/pageSection";
import { simpleRowColLayout } from "../../../../../layout/rows/simpleRowColLayout";
import { meldenCard } from "../../../../cards/meldenCard";

export const basiskennisTekenPage = (path: string): PageConfig => {
  return infoPageLayout({
    path: path,
    pageKey: 'informatie/tekeninfo/basiskennisTeken',
    topImage: {
      type: 'teaserImage',
      image: {
        url: '/images/no-license/het-gedrag.jpg',
        backgroundPosition: '70% 35%',
        height: 367,
      },
    },
    sideBarItems: [
      meldenCard(),
    ],
    bottomRows: [
      pageSection({
        sectionKey: 'global:infoPageReferences',
        className: 'my-3',
        rows: [
          simpleRowColLayout({
            rowKey: 'references-row',
            items: [
              {
                colClassName: 'col-12 col-sm-6',
                itemKey: 'backToOverviewPage',
                className: "mt-2",
                config: {
                  type: 'actionCard',
                  bodyBgImage: {
                    url: '/images/no-license/waar-leven-teken.jpg',
                    backgroundPosition: '50% 50%',
                  },
                  action: {
                    type: 'navigate',
                    value: '/informatie/teken'
                  },
                }
              },
              {
                colClassName: 'col-12 col-sm-6',
                itemKey: 'nextArticle',
                className: "mt-2",
                config: {
                  type: 'actionCard',
                  action: {
                    type: 'navigate',
                    value: '/informatie/waar-leven-teken'
                  },
                }
              },
              {
                colClassName: 'col-12',
                itemKey: 'anotherTopic',
                className: "mt-2",
                config: {
                  type: 'actionCard',
                  image: {
                    placement: 'left',
                    width: '150px',
                    maxWidth: '150px',
                    url: '/images/no-license/waar-leven-teken.jpg',
                    backgroundPosition: '50% 50%',
                  },
                  action: {
                    type: 'navigate',
                    value: '/informatie/lyme'
                  },
                }
              }
            ]
          })
        ]
      })

    ]
  });
}
