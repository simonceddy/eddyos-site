import dot from 'dot-object';
import cloneDeep from 'lodash/cloneDeep';
import articles from '../storage/articles';

const getDefaultArticles = () => cloneDeep(articles);

function Fs() {
  // init file structure
  const filesystem = {
    articles: null
  };

  const initFs = () => {
    filesystem.articles = getDefaultArticles();
  };

  initFs();

  // console.log(filesystem);

  const slashToDots = path => path.replace('/', '.');

  this.load = path => dot.pick(slashToDots(path), filesystem, false);

  this.save = (path, doc) => {
    if (typeof doc !== 'object' || !doc.key) {
      return false;
    }

    dot.set(slashToDots(path), doc, filesystem);

    return this;
  };

  this.reset = () => {
    initFs();
  };
}

export default Fs;
