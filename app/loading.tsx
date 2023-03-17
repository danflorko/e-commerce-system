'use client';
import { FC, Fragment, useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';

const Loading: FC = () => {
    const [rectsPerRow, setRectsPerRow] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            switch (true) {
                case window.innerWidth >= 1700:
                    setRectsPerRow(4);
                    break
                case window.innerWidth >= 1380:
                    setRectsPerRow(3);
                    break
                case window.innerWidth >= 1140:
                    setRectsPerRow(2);
                    break
                default:
                    setRectsPerRow(1);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const rectWidth = 228;
    const rectHeight = rectWidth;

    return (
        <ContentLoader viewBox={`-270 -125 ${window.innerWidth} 900`} height={900} width={window.innerWidth}>
            {[...Array(3)].map((_, rowIdx) => (
                <Fragment key={rowIdx}>
                    {[...Array(rectsPerRow)].map((_, colIdx) => {
                        const xPosition = colIdx * rectWidth + (colIdx + 1) * 16
                        const yPosition = rowIdx * rectHeight + (rowIdx + 1) * 100

                        return (
                            <Fragment key={colIdx}>
                                <rect
                                    x={xPosition}
                                    y={yPosition}
                                    rx="8"
                                    ry="8"
                                    width={rectWidth}
                                    height={rectHeight}
                                />
                                <rect
                                    x={xPosition}
                                    y={yPosition + rectHeight + 15}
                                    rx="0"
                                    ry="0"
                                    width={rectWidth - 80}
                                    height="18"
                                />
                                <rect
                                    x={xPosition}
                                    y={yPosition + rectHeight + 43}
                                    rx="0"
                                    ry="0"
                                    width={rectWidth - 30}
                                    height="20"
                                />
                            </Fragment>
                        )
                    })}
                </Fragment>
            ))}
        </ContentLoader>
    );
};

export default Loading;