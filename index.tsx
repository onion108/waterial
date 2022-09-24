import { LeafComponent, registerComponent } from '@leaf-web/core';
import Fab from '@waterial/fab';
import Button from '@waterial/button';
import Icon from '@waterial/icon';
import FloatingListItem from './packages/floating_list/src/FloatingListItem';

class Home extends LeafComponent {
  render() {
    return (
      <div>
        <Fab>add</Fab>
        <Button type="elevated" icon="add">
          Butono
        </Button>
        <FloatingListItem icon="add" ricon="add" rtext="⌘Q">
          Flosanta Listo Ero
        </FloatingListItem>
        <Icon>add</Icon>
      </div>
    );
  }
}

export default registerComponent('waterial-home', Home);
