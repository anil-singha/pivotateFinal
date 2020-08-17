import _ from 'lodash';

export default (data) => {
  let parentData = data.map((instance) => ({
    ...instance,
    parentId: instance.children[0].instances[0]
      ? instance.children[0].instances[0].id
      : null,
  }));

  const hasParentId = _.groupBy(parentData, 'parentId');

  parentData = parentData.map((instance) => ({
    ...instance,
    _children: hasParentId[instance.id] || [],
  }));

  const prData = Object.keys(hasParentId);
  const childData = [];

  for (const id in prData) {
    if (prData[id]) {
      parentData.map((instance) => {
        if (instance.parentId && prData[id] === instance.parentId) {
          childData.push(instance);
        }
      });
    }
  }

  return [parentData, childData];
};
