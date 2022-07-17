import { useState, forwardRef } from 'react';
import images from '~/assets/images';

//fallback: customFallback -> modify name ES6
function Image({ src = '', alt = '', fallback: customFallback = images.noImage, ...props }, ref) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    // eslint-disable-next-line jsx-a11y/alt-text
    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
}

export default forwardRef(Image);
