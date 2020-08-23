import withErrorHandler from 'Components/withErrorHandler';
import loadable from '@loadable/component';

const GenderGroup = loadable(() => import(/* webpackChunkName: "gender_group_component" */'./GenderGroup'));

export default withErrorHandler(GenderGroup);
