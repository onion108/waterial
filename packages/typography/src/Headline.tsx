import { css, LeafComponent, registerComponent } from '@leaf-web/core';
import { typography } from '@waterial/base';

class Headline extends LeafComponent {
  static watchedProps = ['size', 'inline', 'as'];

  constructor() {
    super();
  }

  render() {
    const Container = `${this.props.as || 'h1'}`;
    return (
      <Container className={`headline-${this.props.size}`}>
        <slot></slot>
      </Container>
    );
  }

  css() {
    const currentSpec = typography.headline[this.props.size ?? 'medium'];
    return css`
      .headline-${this.props.size} {
        font-family: ${currentSpec.family};
        font-size: ${currentSpec.size};
        font-weight: ${currentSpec.weight};
        font-style: ${currentSpec.style};
        letter-spacing: ${currentSpec.letterSpacing};
        line-height: ${currentSpec.lineHeight};
        ${this.props.inline ? 'display: inline;' : 'display: block'};
      }
    `;
  }
}

export default registerComponent('waterial-headline', Headline);
