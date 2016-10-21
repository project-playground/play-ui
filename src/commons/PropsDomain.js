import { PropTypes  } from 'react';

export default class PropsDomain {
    static get SIZE() {
        return PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'])
    }
}