import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/App';
import DocumentMeta from 'react-document-meta';
import registerServiceWorker from './registerServiceWorker';



const meta = {
      title: 'Finicial Tool',
      description: 'Web intarface for home budget management',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    };

ReactDOM.render(
  <DocumentMeta {...meta}>
    <App />
  </DocumentMeta>,
   document.getElementById('root')
);
registerServiceWorker();
