import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('InstagramWidget', {
  title: 'Instagram Widget',
  description: 'A widget displaying an Instagram post',
   
   properties: ['url', 'maxWidth', 'hideCaption'],

   attributes: {
    url:{
      title: 'Url',
      description: 'Input the Url of the instagram post you wish to display.',
    },
    maxWidth:{
      title: 'Maximum Width',
      description: 'Input the maximum width you wish to display the post (minimum is 320).',
    },
    hideCaption:{
      title: 'Hide the caption?',
      description: 'Do you want to hide the caption?',
      values: [{ value: 'true', title: 'Yes' }, { value: 'false', title: 'No' }],
    },
  },
  initialContent: {
    maxWidth: 320,
    hideCaption: 'false',
  },
});