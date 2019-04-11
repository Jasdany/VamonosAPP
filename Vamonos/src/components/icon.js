import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({ name, size }) => (
    <Icon
        name={ name }
        size={ size ? size : 18 }
    />
)