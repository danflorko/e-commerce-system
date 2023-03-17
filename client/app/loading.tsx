'use client';
import { Fragment, useCallback, useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import type { FC } from 'react'

const Loading: FC = () => {
    const [width, setWidth] = useState<number>(1300);
    const [rectsPerRow, setRectsPerRow] = useState<number>(4);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const getColumnsCount = () => {
            switch (true) {
                case width >= 1700:
                    setRectsPerRow(4)
                    break
                case width >= 1380:
                    setRectsPerRow(3)
                    break
                case width >= 1140:
                    setRectsPerRow(2)
                    break
                default:
                    setRectsPerRow(1)
            }
        }
    }, [width])

    const rectWidth = 278;
    const rectHeight = rectWidth;

    return (
        <ContentLoader viewBox={`-100 -50 ${width} 900`} height={900} width={width}>
            <rect
                x={130}
                y={10}
                rx="8"
                ry="8"
                width={935}
                height={48}
            />
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