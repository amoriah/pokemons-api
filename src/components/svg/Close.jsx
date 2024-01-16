import { CloseSvg } from '../Styles.styles';

export const Close = ({ dark }) => {
    const color = dark
        ? { background: 'white', foreground: '#231f20' }
        : { background: '#231f20', foreground: 'white' };

    return (
        <CloseSvg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'>
            <defs>
                <style>
                    {`
            .cls-1 { fill: ${color.foreground}; opacity: 0; }
            .cls-2 { fill: ${color.background}; }
          `}
                </style>
            </defs>
            <title>close</title>
            <g
                id='Layer_2'
                data-name='Layer 2'>
                <g id='close'>
                    <g
                        id='close-2'
                        data-name='close'>
                        <rect
                            className='cls-1'
                            width='24'
                            height='24'
                            transform='translate(24 24) rotate(180)'
                        />
                        <path
                            className='cls-2'
                            d='M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z'
                        />
                    </g>
                </g>
            </g>
        </CloseSvg>
    );
};
