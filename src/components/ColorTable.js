import React from 'react';
import colors from '../utils/colors';
import colorTable from '../css/modules/color-table.module.css'

export default function ColorTable() {
    const colorTypes = ['standard', 'tint', 'shade'];
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Color</th>
                        <th className="text-center">Standard</th>
                        <th className="text-center">Tint</th>
                        <th className="text-center">Shade</th>
                    </tr>
                </thead>
                <tbody>
                {
                    colors.map(color => {
                        return (
                            <tr key={color.name}>
                                <td>
                                    {color.name}
                                </td>
                                {
                                    colorTypes.map(colorType => {
                                        const {code, cssVariable} = color.colorCodes[colorType];
                                        const style = {
                                            background: code,
                                        }
                                        const colorLayout = {
                                            gap: 'var(--rem-div-phi)',
                                        }
                                        return (
                                            <td key={`${color.name}-${colorType}`}>
                                                <div className="flex flex-column justify-content-center align-items-center" style={colorLayout}>
                                                    {
                                                        code !== '-' ?
                                                        <><div className={colorTable.colorBlock} style={style}></div><code className="color-code">{cssVariable}</code> </> : ''
                                                    }
                                                    <div className="color-code">{code}</div>

                                                </div>
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
