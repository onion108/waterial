import {
  css,
  LeafComponent,
  LeafComponentRenderResult,
  registerComponent,
} from '@leaf-web/core';

class FloatingList extends LeafComponent {
  render(): LeafComponentRenderResult {
    const onclickCallback = this.props.onClick;
    let text;
    return <></>;
  }
}

registerComponent('waterial-fl', FloatingList);

export default FloatingList;
