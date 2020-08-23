import withErrorHandler from 'Components/withErrorHandler';
import loadable from '@loadable/component';

const Select = loadable(() => import(/* webpackChunkName: "select_component" */'./Select'));

export default withErrorHandler(Select);
