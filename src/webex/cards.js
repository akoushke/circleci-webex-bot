export const getPRTemplate = (reponame, {avatar_url, name}, buildURL, prURL) => [
  {
    contentType: 'application/vnd.microsoft.card.adaptive',
    content: {
      $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
      type: 'AdaptiveCard',
      version: '1.0',
      body: [
        {
          type: 'Container',
          items: [
            {
              type: 'TextBlock',
              text: `${reponame} Repository`,
              weight: 'Bolder',
              size: 'Medium',
            },
            {
              type: 'ColumnSet',
              columns: [
                {
                  type: 'Column',
                  width: 'auto',
                  items: [
                    {
                      type: 'Image',
                      url: avatar_url,
                      size: 'Small',
                      style: 'Person',
                    },
                  ],
                },
                {
                  type: 'Column',
                  width: 'auto',
                  items: [
                    {
                      type: 'TextBlock',
                      text: name,
                      weight: 'Bolder',
                      wrap: true,
                    },
                    {
                      type: 'TextBlock',
                      text: 'Triggered a job',
                      spacing: 'None',
                      color: 'Dark',
                    },
                  ],
                  style: 'default',
                },
              ],
            },
          ],
        },
        {
          type: 'ColumnSet',
          spacing: 'None',
          columns: [
            {
              type: 'Column',
              width: 'auto',
              items: [
                {
                  type: 'ActionSet',
                  actions: [
                    {
                      type: 'Action.OpenUrl',
                      title: 'View Build',
                      url: buildURL,
                    },
                  ],
                },
              ],
              horizontalAlignment: 'Left',
              spacing: 'None',
            },
            {
              type: 'Column',
              width: 'auto',
              items: [
                {
                  type: 'ActionSet',
                  actions: [
                    {
                      type: 'Action.OpenUrl',
                      title: 'View Pull Request',
                      url: prURL,
                    },
                  ],
                },
              ],
            },
          ],
          horizontalAlignment: 'Center',
        },
      ],
    },
  },
];

export const getStatusTemplate = (reponame, message, buildURL, style) => [
  {
    contentType: 'application/vnd.microsoft.card.adaptive',
    content: {
      $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
      type: 'AdaptiveCard',
      version: '1.0',
      body: [
        {
          type: 'Container',
          items: [
            {
              type: 'TextBlock',
              text: `${reponame} Repository`,
              weight: 'Bolder',
              size: 'Medium',
              horizontalAlignment: 'Left',
            },
            {
              type: 'ColumnSet',
              columns: [
                {
                  type: 'Column',
                  width: 'stretch',
                  items: [
                    {
                      type: 'TextBlock',
                      text: message,
                      color: style,
                    },
                  ],
                  id: 'col',
                  horizontalAlignment: 'Left',
                  style: 'default',
                },
              ],
              horizontalAlignment: 'Left',
              style: 'default',
            },
          ],
        },
      ],
    },
  },
];
