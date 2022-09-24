import {
  css,
  LeafComponent,
  LeafComponentRenderResult,
  registerComponent,
} from '@leaf-web/core';

class FloatingList extends LeafComponent {
  render(): LeafComponentRenderResult {
    // no need :(
    const onclickCallback = this.props.onClick;
    let text;
    // segments don't work :(
    // TODO : I will complete this after completing the `FloatingListItem` component
    return <></>;
  }
}

registerComponent('waterial-fl', FloatingList);

export default FloatingList;
