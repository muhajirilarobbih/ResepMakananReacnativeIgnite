import { Platform } from "react-native"
import { fontSizes } from "./theme/font-sizes"

const customMapping = {
    strict: {
        'text-font-family': 'OpenSans-Regular',
        'text-heading-1-font-size': fontSizes.h1,
        'text-heading-1-line-height': fontSizes.h1,
        'text-heading-1-font-weight': '800',
        'text-heading-1-font-family': 'OpenSans-Regular',
        'text-heading-2-font-size': fontSizes.h2,
        'text-heading-2-line-height': fontSizes.h2,
        'text-heading-2-font-weight': '800',
        'text-heading-3-font-size': fontSizes.h3,
        'text-heading-3-line-height': fontSizes.h3,
        'text-heading-3-font-weight': '800',
        'text-heading-4-font-size': fontSizes.h4,
        'text-heading-4-line-height': fontSizes.h4,
        'text-heading-4-font-weight': '800',
        'text-heading-5-font-size': fontSizes.h5,
        'text-heading-5-line-height': fontSizes.h5,
        'text-heading-5-font-weight': '800',
        'text-heading-6-font-size': fontSizes.h6,
        'text-heading-6-line-height': fontSizes.h6,
        'text-heading-6-font-weight': '800',
        'text-subtitle-1-font-size': fontSizes.caption2,
        'text-subtitle-1-line-height': fontSizes.caption2,
        'text-subtitle-1-font-weight': '600',
        'text-subtitle-2-font-size': fontSizes.caption2,
        'text-subtitle-2-line-height': fontSizes.caption2,
        'text-subtitle-2-font-weight': '600',
        'text-paragraph-1-font-size': fontSizes.bodyText1,
        'text-paragraph-1-line-height': fontSizes.bodyText1,
        'text-paragraph-1-font-weight': '400',
        'text-paragraph-2-font-size': fontSizes.bodyText2,
        'text-paragraph-2-line-height': fontSizes.bodyText2,
        'text-paragraph-2-font-weight': '400',
        'text-caption-1-font-size': fontSizes.caption1,
        'text-caption-1-line-height': fontSizes.caption1,
        'text-caption-1-font-weight': '400',
        'text-caption-2-font-size': fontSizes.caption2,
        'text-caption-2-line-height': fontSizes.caption2,
        'text-caption-2-font-weight': '600',
        'text-label-font-size': fontSizes.bodyText1,
        'text-label-line-height': fontSizes.bodyText1,
        'text-label-font-weight': '400',
        'size-tiny': 24,
        'size-small': 32,
        'size-medium': 40,
        'size-large': 48,
        'size-giant': 56,
        'border-radius': 4,
        'border-width': 1
    },
    components: {
        Input: {
            meta: {
                scope: 'all',
                parameters: {
                    paddingVertical: {
                        type: 'number'
                    },
                    paddingHorizontal: {
                        type: 'number'
                    },
                    minHeight: {
                        type: 'number'
                    },
                    borderRadius: {
                        type: 'number'
                    },
                    borderWidth: {
                        type: 'number'
                    },
                    borderColor: {
                        type: 'string'
                    },
                    backgroundColor: {
                        type: 'string'
                    },
                    textMarginHorizontal: {
                        type: 'number'
                    },
                    textFontFamily: {
                        type: 'string'
                    },
                    textFontSize: {
                        type: 'number'
                    },
                    textLineHeight: {
                        type: 'number'
                    },
                    textFontWeight: {
                        type: 'string'
                    },
                    textColor: {
                        type: 'string'
                    },
                    placeholderColor: {
                        type: 'string'
                    },
                    iconWidth: {
                        type: 'number'
                    },
                    iconHeight: {
                        type: 'number'
                    },
                    iconMarginHorizontal: {
                        type: 'number'
                    },
                    iconTintColor: {
                        type: 'string'
                    },
                    labelColor: {
                        type: 'string'
                    },
                    labelFontFamily: {
                        type: 'string'
                    },
                    labelFontSize: {
                        type: 'number'
                    },
                    labelLineHeight: {
                        type: 'number'
                    },
                    labelFontWeight: {
                        type: 'string'
                    },
                    labelMarginBottom: {
                        type: 'number'
                    },
                    captionMarginTop: {
                        type: 'number'
                    },
                    captionColor: {
                        type: 'string'
                    },
                    captionFontFamily: {
                        type: 'string'
                    },
                    captionFontSize: {
                        type: 'number'
                    },
                    captionLineHeight: {
                        type: 'number'
                    },
                    captionFontWeight: {
                        type: 'string'
                    },
                    captionIconWidth: {
                        type: 'number'
                    },
                    captionIconHeight: {
                        type: 'number'
                    },
                    captionIconMarginRight: {
                        type: 'number'
                    },
                    captionIconTintColor: {
                        type: 'string'
                    },
                    textMarginVertical: {
                        type: 'number'
                    },
                    textPaddingVertical: {
                        type: 'number'
                    },
                    textPaddingHorizontal: {
                        type: 'number'
                    }
                },
                appearances: {
                    'default': {
                        'default': true
                    }
                },
                variantGroups: {
                    status: {
                        basic: {
                            'default': true
                        },
                        primary: {
                            'default': false
                        },
                        success: {
                            'default': false
                        },
                        info: {
                            'default': false
                        },
                        warning: {
                            'default': false
                        },
                        danger: {
                            'default': false
                        },
                        control: {
                            'default': false
                        }
                    },
                    size: {
                        small: {
                            'default': false
                        },
                        medium: {
                            'default': true
                        },
                        large: {
                            'default': false
                        }
                    }
                },
                states: {
                    hover: {
                        'default': false,
                        priority: 0,
                        scope: 'all'
                    },
                    disabled: {
                        'default': false,
                        priority: 1,
                        scope: 'all'
                    },
                    focused: {
                        'default': false,
                        priority: 2,
                        scope: 'all'
                    }
                }
            },
            appearances: {
                'default': {
                    mapping: {
                        textFontFamily: 'text-font-family',
                        iconWidth: 24,
                        iconHeight: 24,
                        iconMarginHorizontal: 8,
                        labelMarginBottom: 4,
                        labelFontSize: 'text-label-font-size',
                        labelFontWeight: 'text-label-font-weight',
                        labelLineHeight: 'text-label-line-height',
                        labelFontFamily: 'text-font-family',
                        captionMarginTop: 4,
                        captionFontSize: 'text-caption-1-font-size',
                        captionFontWeight: 'text-caption-1-font-weight',
                        captionLineHeight: 'text-caption-1-line-height',
                        captionFontFamily: 'text-font-family',
                        captionIconWidth: 10,
                        captionIconHeight: 10,
                        captionIconMarginRight: 8,
                        textPaddingVertical: 50,
                    }
                }
            }
        },
        Button: {
            meta: {
                scope: 'all',
                parameters: {
                    minWidth: {
                        type: 'number'
                    },
                    minHeight: {
                        type: 'number'
                    },
                    paddingHorizontal: {
                        type: 'number'
                    },
                    paddingVertical: {
                        type: 'number'
                    },
                    borderRadius: {
                        type: 'number'
                    },
                    borderColor: {
                        type: 'string'
                    },
                    borderWidth: {
                        type: 'number'
                    },
                    backgroundColor: {
                        type: 'string'
                    },
                    textMarginHorizontal: {
                        type: 'number'
                    },
                    textFontFamily: {
                        type: 'string'
                    },
                    textFontSize: {
                        type: 'number'
                    },
                    textLineHeight: {
                        type: 'number'
                    },
                    textFontWeight: {
                        type: 'string'
                    },
                    textColor: {
                        type: 'string'
                    },
                    iconWidth: {
                        type: 'number'
                    },
                    iconHeight: {
                        type: 'number'
                    },
                    iconTintColor: {
                        type: 'string'
                    },
                    iconMarginHorizontal: {
                        type: 'number'
                    }
                },
                appearances: {
                    filled: {
                        'default': true
                    },
                    outline: {
                        'default': false
                    },
                    ghost: {
                        'default': false
                    }
                },
                variantGroups: {
                    status: {
                        basic: {
                            'default': false
                        },
                        primary: {
                            'default': true
                        },
                        success: {
                            'default': false
                        },
                        info: {
                            'default': false
                        },
                        warning: {
                            'default': false
                        },
                        danger: {
                            'default': false
                        },
                        control: {
                            'default': false
                        }
                    },
                    size: {
                        tiny: {
                            'default': false
                        },
                        small: {
                            'default': true
                        },
                        medium: {
                            'default': false
                        },
                        large: {
                            'default': false
                        },
                        giant: {
                            'default': false
                        }
                    }
                },
                states: {
                    hover: {
                        'default': false,
                        priority: 0,
                        scope: 'all'
                    },
                    disabled: {
                        'default': false,
                        priority: 1,
                        scope: 'all'
                    },
                    active: {
                        'default': false,
                        priority: 2,
                        scope: 'all'
                    },
                    focused: {
                        'default': false,
                        priority: 3,
                        scope: 'mobile'
                    }
                }
            },
            appearances: {
                filled: {
                    mapping: {
                        textFontFamily: 'text-font-family',
                        iconMarginHorizontal: 4,
                    },
                    variantGroups: {
                        status: {
                            basic: {
                                borderColor: 'color-basic-default-border',
                                backgroundColor: 'color-basic-default',
                                textColor: 'color-basic-800',
                                iconTintColor: 'color-basic-800',
                                state: {
                                    focused: {
                                        borderColor: 'color-basic-focus-border',
                                        backgroundColor: 'color-basic-focus'
                                    },
                                    hover: {
                                        borderColor: 'color-basic-hover-border',
                                        backgroundColor: 'color-basic-hover'
                                    },
                                    active: {
                                        borderColor: 'color-basic-active-border',
                                        backgroundColor: 'color-basic-active'
                                    },
                                    disabled: {
                                        borderColor: 'color-basic-disabled-border',
                                        backgroundColor: 'color-basic-disabled',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            primary: {
                                borderColor: 'color-primary-default-border',
                                backgroundColor: 'color-primary-default',
                                textColor: 'text-control-color',
                                iconTintColor: 'text-control-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-primary-focus-border',
                                        backgroundColor: 'color-primary-focus'
                                    },
                                    hover: {
                                        borderColor: 'color-primary-disabled-border',
                                        backgroundColor: 'color-primary-disabled',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    },
                                    active: {
                                        borderColor: 'color-primary-active-border',
                                        backgroundColor: 'color-primary-active'
                                    },
                                    disabled: {
                                        borderColor: 'color-basic-active-border',
                                        backgroundColor: 'color-basic-active',
                                        textColor: 'color-basic-600',
                                    },
                                }
                            },
                            success: {
                                borderColor: 'color-success-default-border',
                                backgroundColor: 'color-success-default',
                                textColor: 'text-control-color',
                                iconTintColor: 'text-control-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-success-focus-border',
                                        backgroundColor: 'color-success-focus'
                                    },
                                    hover: {
                                        borderColor: 'color-success-hover-border',
                                        backgroundColor: 'color-success-hover'
                                    },
                                    active: {
                                        borderColor: 'color-success-active-border',
                                        backgroundColor: 'color-success-active'
                                    },
                                    disabled: {
                                        borderColor: 'color-success-disabled-border',
                                        backgroundColor: 'color-success-disabled',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            info: {
                                borderColor: 'color-info-default-border',
                                backgroundColor: 'color-info-default',
                                textColor: 'text-control-color',
                                iconTintColor: 'text-control-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-info-focus-border',
                                        backgroundColor: 'color-info-focus'
                                    },
                                    hover: {
                                        borderColor: 'color-info-hover-border',
                                        backgroundColor: 'color-info-hover'
                                    },
                                    active: {
                                        borderColor: 'color-info-active-border',
                                        backgroundColor: 'color-info-active'
                                    },
                                    disabled: {
                                        borderColor: 'color-info-disabled-border',
                                        backgroundColor: 'color-info-disabled',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            warning: {
                                borderColor: 'color-warning-default-border',
                                backgroundColor: 'color-warning-default',
                                textColor: 'text-control-color',
                                iconTintColor: 'text-control-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-warning-focus-border',
                                        backgroundColor: 'color-warning-focus'
                                    },
                                    hover: {
                                        borderColor: 'color-warning-hover-border',
                                        backgroundColor: 'color-warning-hover'
                                    },
                                    active: {
                                        borderColor: 'color-warning-active-border',
                                        backgroundColor: 'color-warning-active'
                                    },
                                    disabled: {
                                        borderColor: 'color-warning-disabled-border',
                                        backgroundColor: 'color-warning-disabled',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            danger: {
                                borderColor: 'color-danger-default-border',
                                backgroundColor: 'color-danger-default',
                                textColor: 'text-control-color',
                                iconTintColor: 'text-control-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-danger-focus-border',
                                        backgroundColor: 'color-danger-focus'
                                    },
                                    hover: {
                                        borderColor: 'color-danger-hover-border',
                                        backgroundColor: 'color-danger-hover'
                                    },
                                    active: {
                                        borderColor: 'color-danger-active-border',
                                        backgroundColor: 'color-danger-active'
                                    },
                                    disabled: {
                                        borderColor: 'color-danger-disabled-border',
                                        backgroundColor: 'color-danger-disabled',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            control: {
                                borderColor: 'color-control-default-border',
                                backgroundColor: 'color-control-default',
                                textColor: 'color-basic-800',
                                iconTintColor: 'color-basic-800',
                                state: {
                                    focused: {
                                        borderColor: 'color-control-focus-border',
                                        backgroundColor: 'color-control-focus'
                                    },
                                    hover: {
                                        borderColor: 'color-control-hover-border',
                                        backgroundColor: 'color-control-hover'
                                    },
                                    active: {
                                        borderColor: 'color-control-active-border',
                                        backgroundColor: 'color-control-active'
                                    },
                                    disabled: {
                                        borderColor: 'color-control-disabled-border',
                                        backgroundColor: 'color-control-disabled',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            }
                        },
                        size: {
                            tiny: {
                                minWidth: 'size-tiny',
                                minHeight: 'size-tiny',
                                borderRadius: 8,
                                borderWidth: 'border-width',
                                paddingHorizontal: 6,
                                paddingVertical: 6,
                                textMarginHorizontal: 6,
                                textFontSize: 10,
                                textFontWeight: '600',
                                textLineHeight: 12,
                                iconWidth: 12,
                                iconHeight: 12,
                                iconMarginHorizontal: 6
                            },
                            small: {
                                minWidth: 'size-small',
                                minHeight: 'size-small',
                                borderRadius: 8,
                                borderWidth: 'border-width',
                                paddingHorizontal: 15,
                                paddingVertical: 8,
                                textMarginHorizontal: 0,
                                textFontSize: 'text-label-font-size',
                                textFontWeight: '600',
                                textLineHeight: 'text-heading-6-line-height',
                                iconWidth: 16,
                                iconHeight: 16,
                                iconMarginHorizontal: 8,
                            },
                            medium: {
                                minWidth: 'size-medium',
                                minHeight: 'size-medium',
                                borderRadius: 8,
                                borderWidth: 'border-width',
                                paddingHorizontal: 10,
                                // paddingVertical: 12,
                                textMarginHorizontal: 10,
                                textFontSize: 14,
                                textFontWeight: '600',
                                textLineHeight: 16,
                                iconWidth: 20,
                                iconHeight: 20,
                                iconMarginHorizontal: 10
                            },
                            large: {
                                minWidth: 'size-large',
                                minHeight: 'size-large',
                                borderRadius: 8,
                                borderWidth: 'border-width',
                                paddingHorizontal: 10,
                                paddingVertical: 14,
                                textMarginHorizontal: 10,
                                textFontSize: 16,
                                textFontWeight: '600',
                                textLineHeight: 20,
                                iconWidth: 24,
                                iconHeight: 24,
                                iconMarginHorizontal: 10
                            },
                            giant: {
                                minWidth: 'size-giant',
                                minHeight: 'size-giant',
                                borderRadius: 8,
                                borderWidth: 'border-width',
                                paddingHorizontal: 12,
                                paddingVertical: 16,
                                textMarginHorizontal: 12,
                                textFontSize: 18,
                                textFontWeight: '600',
                                textLineHeight: 24,
                                iconWidth: 24,
                                iconHeight: 24,
                                iconMarginHorizontal: 12
                            }
                        }
                    }
                },
                outline: {
                    mapping: {},
                    variantGroups: {
                        status: {
                            basic: {
                                borderColor: 'color-basic-transparent-default-border',
                                backgroundColor: 'color-basic-transparent-default',
                                textColor: 'text-hint-color',
                                iconTintColor: 'text-hint-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-basic-transparent-focus-border',
                                        backgroundColor: 'color-basic-transparent-focus',
                                        textColor: 'text-hint-color',
                                        iconTintColor: 'text-hint-color'
                                    },
                                    hover: {
                                        borderColor: 'color-basic-transparent-hover-border',
                                        backgroundColor: 'color-basic-transparent-hover',
                                        textColor: 'text-hint-color',
                                        iconTintColor: 'text-hint-color'
                                    },
                                    active: {
                                        borderColor: 'color-basic-transparent-active-border',
                                        backgroundColor: 'color-basic-transparent-active',
                                        textColor: 'text-hint-color',
                                        iconTintColor: 'text-hint-color'
                                    },
                                    disabled: {
                                        borderColor: 'color-basic-transparent-disabled-border',
                                        backgroundColor: 'color-basic-transparent-disabled',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            primary: {
                                borderColor: 'color-primary-transparent-default-border',
                                backgroundColor: 'color-primary-transparent-default',
                                textColor: 'text-primary-color',
                                iconTintColor: 'text-primary-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-primary-transparent-focus-border',
                                        backgroundColor: 'color-primary-transparent-focus',
                                        textColor: 'text-primary-color',
                                        iconTintColor: 'text-primary-color'
                                    },
                                    hover: {
                                        borderColor: 'color-primary-transparent-hover-border',
                                        backgroundColor: 'color-primary-transparent-hover',
                                        textColor: 'text-primary-color',
                                        iconTintColor: 'text-primary-color'
                                    },
                                    active: {
                                        borderColor: 'color-primary-transparent-active-border',
                                        backgroundColor: 'color-primary-transparent-active',
                                        textColor: 'text-primary-color',
                                        iconTintColor: 'text-primary-color'
                                    },
                                    disabled: {
                                        borderColor: 'color-primary-transparent-disabled-border',
                                        backgroundColor: 'color-primary-transparent-disabled',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            success: {
                                borderColor: 'color-success-transparent-default-border',
                                backgroundColor: 'color-success-transparent-default',
                                textColor: 'text-success-color',
                                iconTintColor: 'text-success-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-success-transparent-focus-border',
                                        backgroundColor: 'color-success-transparent-focus',
                                        textColor: 'text-success-color',
                                        iconTintColor: 'text-success-color'
                                    },
                                    hover: {
                                        borderColor: 'color-success-transparent-hover-border',
                                        backgroundColor: 'color-success-transparent-hover',
                                        textColor: 'text-success-color',
                                        iconTintColor: 'text-success-color'
                                    },
                                    active: {
                                        borderColor: 'color-success-transparent-active-border',
                                        backgroundColor: 'color-success-transparent-active',
                                        textColor: 'text-success-color',
                                        iconTintColor: 'text-success-color'
                                    },
                                    disabled: {
                                        borderColor: 'color-success-transparent-disabled-border',
                                        backgroundColor: 'color-success-transparent-disabled',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            info: {
                                borderColor: 'color-info-transparent-default-border',
                                backgroundColor: 'color-info-transparent-default',
                                textColor: 'text-info-color',
                                iconTintColor: 'text-info-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-info-transparent-focus-border',
                                        backgroundColor: 'color-info-transparent-focus',
                                        textColor: 'text-info-color',
                                        iconTintColor: 'text-info-color'
                                    },
                                    hover: {
                                        borderColor: 'color-info-transparent-hover-border',
                                        backgroundColor: 'color-info-transparent-hover',
                                        textColor: 'text-info-color',
                                        iconTintColor: 'text-info-color'
                                    },
                                    active: {
                                        borderColor: 'color-info-transparent-active-border',
                                        backgroundColor: 'color-info-transparent-active',
                                        textColor: 'text-info-color',
                                        iconTintColor: 'text-info-color'
                                    },
                                    disabled: {
                                        borderColor: 'color-info-transparent-disabled-border',
                                        backgroundColor: 'color-info-transparent-disabled',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            warning: {
                                borderColor: 'color-warning-transparent-default-border',
                                backgroundColor: 'color-warning-transparent-default',
                                textColor: 'text-warning-color',
                                iconTintColor: 'text-warning-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-warning-transparent-focus-border',
                                        backgroundColor: 'color-warning-transparent-focus',
                                        textColor: 'text-warning-color',
                                        iconTintColor: 'text-warning-color'
                                    },
                                    hover: {
                                        borderColor: 'color-warning-transparent-hover-border',
                                        backgroundColor: 'color-warning-transparent-hover',
                                        textColor: 'text-warning-color',
                                        iconTintColor: 'text-warning-color'
                                    },
                                    active: {
                                        borderColor: 'color-warning-transparent-active-border',
                                        backgroundColor: 'color-warning-transparent-active',
                                        textColor: 'text-warning-color',
                                        iconTintColor: 'text-warning-color'
                                    },
                                    disabled: {
                                        borderColor: 'color-warning-transparent-disabled-border',
                                        backgroundColor: 'color-warning-transparent-disabled',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            danger: {
                                borderColor: 'color-danger-transparent-default-border',
                                backgroundColor: 'color-danger-transparent-default',
                                textColor: 'text-danger-color',
                                iconTintColor: 'text-danger-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-danger-transparent-focus-border',
                                        backgroundColor: 'color-danger-transparent-focus',
                                        textColor: 'text-danger-color',
                                        iconTintColor: 'text-danger-color'
                                    },
                                    hover: {
                                        borderColor: 'color-danger-transparent-hover-border',
                                        backgroundColor: 'color-danger-transparent-hover',
                                        textColor: 'text-danger-color',
                                        iconTintColor: 'text-danger-color'
                                    },
                                    active: {
                                        borderColor: 'color-danger-transparent-active-border',
                                        backgroundColor: 'color-danger-transparent-active',
                                        textColor: 'text-danger-color',
                                        iconTintColor: 'text-danger-color'
                                    },
                                    disabled: {
                                        borderColor: 'color-danger-transparent-disabled-border',
                                        backgroundColor: 'color-danger-transparent-disabled',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            control: {
                                borderColor: 'color-control-transparent-default-border',
                                backgroundColor: 'color-control-transparent-default',
                                textColor: 'text-control-color',
                                iconTintColor: 'text-control-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-control-transparent-focus-border',
                                        backgroundColor: 'color-control-transparent-focus',
                                        textColor: 'text-control-color',
                                        iconTintColor: 'text-control-color'
                                    },
                                    hover: {
                                        borderColor: 'color-control-transparent-hover-border',
                                        backgroundColor: 'color-control-transparent-hover',
                                        textColor: 'text-control-color',
                                        iconTintColor: 'text-control-color'
                                    },
                                    active: {
                                        borderColor: 'color-control-transparent-active-border',
                                        backgroundColor: 'color-control-transparent-active',
                                        textColor: 'text-control-color',
                                        iconTintColor: 'text-control-color'
                                    },
                                    disabled: {
                                        borderColor: 'color-control-transparent-disabled-border',
                                        backgroundColor: 'color-control-transparent-disabled',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            }
                        }
                    }
                },
                ghost: {
                    mapping: {},
                    variantGroups: {
                        status: {
                            basic: {
                                borderColor: 'transparent',
                                backgroundColor: 'transparent',
                                textColor: 'text-hint-color',
                                iconTintColor: 'text-hint-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-basic-transparent-500',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-hint-color',
                                        iconTintColor: 'text-hint-color'
                                    },
                                    hover: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-100',
                                        textColor: 'text-hint-color',
                                        iconTintColor: 'text-hint-color'
                                    },
                                    active: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-hint-color',
                                        iconTintColor: 'text-hint-color'
                                    },
                                    disabled: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            primary: {
                                borderColor: 'transparent',
                                backgroundColor: 'transparent',
                                textColor: 'text-primary-color',
                                iconTintColor: 'text-primary-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-basic-transparent-500',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-primary-color',
                                        iconTintColor: 'text-primary-color'
                                    },
                                    hover: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-100',
                                        textColor: 'text-primary-color',
                                        iconTintColor: 'text-primary-color'
                                    },
                                    active: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-primary-color',
                                        iconTintColor: 'text-primary-color'
                                    },
                                    disabled: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            success: {
                                borderColor: 'transparent',
                                backgroundColor: 'transparent',
                                textColor: 'text-success-color',
                                iconTintColor: 'text-success-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-basic-transparent-500',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-success-color',
                                        iconTintColor: 'text-success-color'
                                    },
                                    hover: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-100',
                                        textColor: 'text-success-color',
                                        iconTintColor: 'text-success-color'
                                    },
                                    active: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-success-color',
                                        iconTintColor: 'text-success-color'
                                    },
                                    disabled: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            info: {
                                borderColor: 'transparent',
                                backgroundColor: 'transparent',
                                textColor: 'text-info-color',
                                iconTintColor: 'text-info-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-basic-transparent-500',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-info-color',
                                        iconTintColor: 'text-info-color'
                                    },
                                    hover: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-100',
                                        textColor: 'text-info-color',
                                        iconTintColor: 'text-info-color'
                                    },
                                    active: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-info-color',
                                        iconTintColor: 'text-info-color'
                                    },
                                    disabled: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            warning: {
                                borderColor: 'transparent',
                                backgroundColor: 'transparent',
                                textColor: 'text-warning-color',
                                iconTintColor: 'text-warning-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-basic-transparent-500',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-info-color',
                                        iconTintColor: 'text-info-color'
                                    },
                                    hover: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-100',
                                        textColor: 'text-warning-color',
                                        iconTintColor: 'text-warning-color'
                                    },
                                    active: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-warning-color',
                                        iconTintColor: 'text-warning-color'
                                    },
                                    disabled: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            danger: {
                                borderColor: 'transparent',
                                backgroundColor: 'transparent',
                                textColor: 'text-danger-color',
                                iconTintColor: 'text-danger-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-basic-transparent-500',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-danger-color',
                                        iconTintColor: 'text-danger-color'
                                    },
                                    hover: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-100',
                                        textColor: 'text-danger-color',
                                        iconTintColor: 'text-danger-color'
                                    },
                                    active: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-danger-color',
                                        iconTintColor: 'text-danger-color'
                                    },
                                    disabled: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            },
                            control: {
                                borderColor: 'transparent',
                                backgroundColor: 'transparent',
                                textColor: 'text-control-color',
                                iconTintColor: 'text-control-color',
                                state: {
                                    focused: {
                                        borderColor: 'color-basic-transparent-500',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-control-color',
                                        iconTintColor: 'text-control-color'
                                    },
                                    hover: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-100',
                                        textColor: 'text-control-color',
                                        iconTintColor: 'text-control-color'
                                    },
                                    active: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-control-color',
                                        iconTintColor: 'text-control-color'
                                    },
                                    disabled: {
                                        borderColor: 'transparent',
                                        backgroundColor: 'color-basic-transparent-200',
                                        textColor: 'text-disabled-color',
                                        iconTintColor: 'text-disabled-color'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        Layout: {
            meta: {
                variantGroups: {
                    level: {
                        '1': {
                            'default': true
                        },
                        '2': {
                            'default': false
                        },
                        '3': {
                            'default': false
                        },
                        '4': {
                            'default': false
                        }
                    }
                }
            }
        }
    }
}
export default customMapping