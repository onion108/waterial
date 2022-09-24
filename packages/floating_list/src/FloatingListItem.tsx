import { css, LeafComponent, registerComponent } from '@leaf-web/core';
import { interactionStates } from '@waterial/base';
import { addAlpha } from '@waterial/base';
import Icon from '@waterial/icon';
import createRipple from '@waterial/ripple';
import { Label } from '@waterial/typography';
import specs, { generateTargetCSS } from './specs';

class FloatingListItem extends LeafComponent {
  static watchedProps = ['type', 'disabled', 'icon', 'ricon', 'rtext'];

  constructor() {
    super();
  }

  render() {
    const currentType = this.props.type || 'filled';
    return (
      <button
        onClick={(e) => {
          if (this.props.disabled) return;
          createRipple(
            e,
            addAlpha(
              specs[currentType]?.active?.stateLayer,
              interactionStates.press
            )
          );
          this.fireEvent(e);
        }}
        className={`button ${`button-${this.props.type}`} ${
          this.props.icon && 'button-icon'
        }`}
        disabled={this.props.disabled}
      >
        <Icon class="icon" size="18px" with-text>
          {this.props.icon}
        </Icon>
        <Label size="large" inline>
          <slot></slot>
        </Label>
        <Label size="small" inline>
          {this.props.rtext}
        </Label>
        <Icon class="icon-r" size="18px">
          {this.props.ricon}
        </Icon>
      </button>
    );
  }

  css() {
    const currentColor = this.props.type || 'filled';
    const currentSpec =
      specs[`${currentColor}${this.props.icon ? 'Icon' : ''}`];
    if (!currentSpec) return css``;
    return css`
      ${Object.keys(currentSpec)
        .map((state) => generateTargetCSS(currentSpec[state], state))
        .join('')}
    `;
  }
}

registerComponent('waterial-fl-item', FloatingListItem);

export default FloatingListItem;
