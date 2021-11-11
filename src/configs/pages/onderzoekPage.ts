import { PageConfig } from "case-web-app-core/build/types/pagesConfig"

export const onderzoekPage = (path: string): PageConfig => {
  return {
    path: path,
    pageKey: 'onderzoek',
    rows: [
      {
        key: 'row1',
        columns: [
          {
            key: 'col1_1',
            className: 'col my-3',
            items: [
              {
                itemKey: '1',
                config: {
                  type: 'placeholder',
                  label: 'Onderzoek',
                  height: 600
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
