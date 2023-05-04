import * as C from './styles';
import { Item } from '../../types/Item';
import { useState } from 'react';

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    return (
        <C.Container done={isChecked}>
            <input
                type="checkbox" 
                checked={isChecked}
                onChange={e => setIsChecked(item.done = !item.done)}
             />
            <label>{item.name}</label>
        </C.Container>
    );
}