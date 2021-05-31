```jsx harmony
const [value, setValue] = React.useState();

const items = [Select.static(() => <Select.Item>Not selectable</Select.Item>), 'One', 'Two', 'Three', Select.SEP, 'Four'];

<Select items={items} value={value} onValueChange={setValue} />;
```

Пример использования пропа `_renderButton`:

```jsx harmony
import { Link } from '@skbkontur/react-ui';
import PeopleIcon from '@skbkontur/react-icons/People';

const [value, setValue] = React.useState();

const  items = [Select.static(() => <Select.Item>Not selectable</Select.Item>), 'One', 'Two', 'Three', Select.SEP, 'Four'];

const renderLinkButton = params => {
  const linkProps = {
    disabled: params.disabled,
    icon: <PeopleIcon />,
    _button: true,
    _buttonOpened: params.opened,

    onClick: params.onClick,
    onKeyDown: params.onKeyDown,
  };

  return <Link {...linkProps}>{params.label}</Link>;
};

<Select
  items={items}
  value={value}
  onValueChange={setValue}
  _renderButton={renderLinkButton}
/>;
```

#### Локали по умолчанию

```typescript static
interface SelectLocale {
  placeholder?: React.ReactNode;
}

const ru_RU = {
  placeholder: 'Ничего не выбрано',
};

const en_GB = {
  placeholder: 'Nothing selected',
};
```