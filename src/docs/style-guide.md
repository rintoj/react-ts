# Style Guide

- [Colors Classes](#colors-classes)
- [Available Colors](#available-colors)
- [Transparent Colors](#transparent-colors)
- [Border Radius](#border-radius)
- [Border Style](#border-style)
- [Border Width](#border-width)
- [Outline](#outline)
- [Flexbox](#flexbox)
- [Font Weight](#font-weight)
- [Opacity](#opacity)
- [Image](#image)
- [Shadow](#shadow)
- [Text](#text)
- [Margin](#margin)
- [Margin Bottom](#margin-bottom)
- [Margin Left](#margin-left)
- [Margin Right](#margin-right)
- [Margin Top](#margin-top)
- [Margin Horizontal](#margin-horizontal)
- [Margin Vertical](#margin-vertical)
- [Padding](#padding)
- [Padding Bottom](#padding-bottom)
- [Padding Left](#padding-left)
- [Padding Right](#padding-right)
- [Padding Top](#padding-top)
- [Padding Horizontal](#padding-horizontal)
- [Padding Vertical](#padding-vertical)
- [Font Size](#font-size)
- [Left](#left)
- [Top](#top)
- [Line Height](#line-height)
- [Height](#height)
- [Max Height](#max-height)
- [Min Height](#min-height)
- [Width](#width)
- [Max Width](#max-width)
- [Min Width](#min-width)
- [Utils](#utils)
- [Overflow](#overflow)
- [Vertical Align](#vertical-align)
- [Transition](#transition)

## Colors Classes

| Style | Css
|-------|---------------------------------
| .${color} | color: ${contrast}; background-color: ${value}; |
| .${color}-contrast | color: ${contrast}; |
| .${color}-text | color: ${value}; |
| .${color}-bg | background-color: ${value}; |
| .${color}-b | border-color: ${value}; |
| .${color}-bt | border-top-color: ${value}; |
| .${color}-br | border-right-color: ${value}; |
| .${color}-bb | border-bottom-color: ${value}; |
| .${color}-bl | border-left-color: ${value}; |
| .${color}-o | outline-color: ${value}; |
| .${color}--hover:hover | color: ${contrast}; background-color: ${value}; |
| .${color}-contrast--hover:hover | color: ${contrast}; |
| .${color}-text--hover:hover | color: ${value}; |
| .${color}-bg--hover:hover | background-color: ${value}; |
| .${color}-b--hover:hover | border-color: ${value}; |
| .${color}-bt--hover:hover | border-top-color: ${value}; |
| .${color}-br--hover:hover | border-right-color: ${value}; |
| .${color}-bb--hover:hover | border-bottom-color: ${value}; |
| .${color}-bl--hover:hover | border-left-color: ${value}; |
| .${color}-o--hover:hover | outline-color: ${value}; |

## Available Colors

| Style | Css (Dark Theme)
|-------|---------------------------------
| .primary | color: #d7e3ea; background-color: #abb4bd; |
| .primary-s1 | color: #abb4bd; background-color: #162029; |
| .primary-s1 | color: #abb4bd; background-color: #162029; |
| .primary-s2 | color: #d3dce0; background-color: #3C4549; |
| .primary-s3 | color: #d3dce0; background-color: #58656d; |
| .secondary | color: #4b585f; background-color: #fafafa; |
| .secondary-s1 | color: #4b585f; background-color: #ecf0f3; |
| .accent | color: #424242; background-color: #ffae27; |
| .white | color: #000; background-color: #fff; |
| .black | color: #fff; background-color: #000; |
| .error | color: #fff; background-color: #D02A2B; |
| .success | color: #fff; background-color: #29D185; |
| .warn | color: #424242; background-color: #D1C829; |
| .divider | background-color: #58656d; |

## Transparent Colors

| Style | Css
|-------|---------------------------------
| .transparent | background-color: transparent; |
| .transparent-text | color: transparent; |
| .transparent-bg | background-color: transparent; |
| .transparent-b | border-color: transparent; |
| .transparent-bt | border-top-color: transparent; |
| .transparent-br | border-right-color: transparent; |
| .transparent-bb | border-bottom-color: transparent; |
| .transparent-bl | border-left-color: transparent; |
| .transparent-o | outline-color: transparent; |
| .transparent--hover:hover | background-color: transparent; |
| .transparent-text--hover:hover | color: transparent; |
| .transparent-bg--hover:hover | background-color: transparent; |
| .transparent-b--hover:hover | border-color: transparent; |
| .transparent-bt--hover:hover | border-top-color: transparent; |
| .transparent-br--hover:hover | border-right-color: transparent; |
| .transparent-bb--hover:hover | border-bottom-color: transparent; |
| .transparent-bl--hover:hover | border-left-color: transparent; |
| .transparent-o--hover:hover | outline-color: transparent; |

## Border Radius

| Style | Css
|-------|---------------------------------
| .brd0 | border-radius: 0em; |
| .brd1 | border-radius: 0.05em; |
| .brd2 | border-radius: 0.1em; |
| .brd3 | border-radius: 0.15em; |
| .brd4 | border-radius: 0.2em; |
| .brd5 | border-radius: 0.25em; |
| .brd6 | border-radius: 0.3em; |
| .brd7 | border-radius: 0.35em; |
| .brd8 | border-radius: 0.4em; |
| .brd9 | border-radius: 0.45em; |
| .brd10 | border-radius: 0.5em; |
| .brd11 | border-radius: 0.55em; |
| .brd12 | border-radius: 0.6em; |
| .brd13 | border-radius: 0.65em; |
| .brd14 | border-radius: 0.7em; |
| .brd15 | border-radius: 0.75em; |
| .brd16 | border-radius: 0.8em; |
| .brd17 | border-radius: 0.85em; |
| .brd18 | border-radius: 0.9em; |
| .brd19 | border-radius: 0.95em; |
| .brd20 | border-radius: 1em; |
| .brd100 | border-radius: 100%; |

## Border Style

| Style | Css
|-------|---------------------------------
| .br--solid | border-style: solid; |
| .br--dotted | border-style: dotted; |
| .br--dashed | border-style: dashed; |

## Border Width

| Style | Css
|-------|---------------------------------
| .bo0 | border-width: 0em; |
| .bot0 | border-top-width: 0em; |
| .bor0 | border-right-width: 0em; |
| .bob0 | border-bottom-width: 0em; |
| .bol0 | border-left-width: 0em; |
| .bov0 | border-top-width: 0em; border-bottom-width: 0em; |
| .boh0 | border-left-width: 0em; border-right-width: 0em; |
| .bo1 | border-width: 0.08333em; |
| .bot1 | border-top-width: 0.08333em; |
| .bor1 | border-right-width: 0.08333em; |
| .bob1 | border-bottom-width: 0.08333em; |
| .bol1 | border-left-width: 0.08333em; |
| .bov1 | border-top-width: 0.08333em; border-bottom-width: 0.08333em; |
| .boh1 | border-left-width: 0.08333em; border-right-width: 0.08333em; |
| .bo2 | border-width: 0.16667em; |
| .bot2 | border-top-width: 0.16667em; |
| .bor2 | border-right-width: 0.16667em; |
| .bob2 | border-bottom-width: 0.16667em; |
| .bol2 | border-left-width: 0.16667em; |
| .bov2 | border-top-width: 0.16667em; border-bottom-width: 0.16667em; |
| .boh2 | border-left-width: 0.16667em; border-right-width: 0.16667em; |
| .bo3 | border-width: 0.25em; |
| .bot3 | border-top-width: 0.25em; |
| .bor3 | border-right-width: 0.25em; |
| .bob3 | border-bottom-width: 0.25em; |
| .bol3 | border-left-width: 0.25em; |
| .bov3 | border-top-width: 0.25em; border-bottom-width: 0.25em; |
| .boh3 | border-left-width: 0.25em; border-right-width: 0.25em; |
| .bo4 | border-width: 0.33333em; |
| .bot4 | border-top-width: 0.33333em; |
| .bor4 | border-right-width: 0.33333em; |
| .bob4 | border-bottom-width: 0.33333em; |
| .bol4 | border-left-width: 0.33333em; |
| .bov4 | border-top-width: 0.33333em; border-bottom-width: 0.33333em; |
| .boh4 | border-left-width: 0.33333em; border-right-width: 0.33333em; |
| .bo5 | border-width: 0.41667em; |
| .bot5 | border-top-width: 0.41667em; |
| .bor5 | border-right-width: 0.41667em; |
| .bob5 | border-bottom-width: 0.41667em; |
| .bol5 | border-left-width: 0.41667em; |
| .bov5 | border-top-width: 0.41667em; border-bottom-width: 0.41667em; |
| .boh5 | border-left-width: 0.41667em; border-right-width: 0.41667em; |
| .bo6 | border-width: 0.5em; |
| .bot6 | border-top-width: 0.5em; |
| .bor6 | border-right-width: 0.5em; |
| .bob6 | border-bottom-width: 0.5em; |
| .bol6 | border-left-width: 0.5em; |
| .bov6 | border-top-width: 0.5em; border-bottom-width: 0.5em; |
| .boh6 | border-left-width: 0.5em; border-right-width: 0.5em; |
| .bo7 | border-width: 0.58333em; |
| .bot7 | border-top-width: 0.58333em; |
| .bor7 | border-right-width: 0.58333em; |
| .bob7 | border-bottom-width: 0.58333em; |
| .bol7 | border-left-width: 0.58333em; |
| .bov7 | border-top-width: 0.58333em; border-bottom-width: 0.58333em; |
| .boh7 | border-left-width: 0.58333em; border-right-width: 0.58333em; |
| .bo8 | border-width: 0.66667em; |
| .bot8 | border-top-width: 0.66667em; |
| .bor8 | border-right-width: 0.66667em; |
| .bob8 | border-bottom-width: 0.66667em; |
| .bol8 | border-left-width: 0.66667em; |
| .bov8 | border-top-width: 0.66667em; border-bottom-width: 0.66667em; |
| .boh8 | border-left-width: 0.66667em; border-right-width: 0.66667em; |

## Outline

| Style | Css
|-------|---------------------------------
| .ol0 | outline-width: 0em; |
| .olt0 | outline-top-width: 0em; |
| .olr0 | outline-right-width: 0em; |
| .olb0 | outline-bottom-width: 0em; |
| .oll0 | outline-left-width: 0em; |
| .olv0 | outline-top-width: 0em; outline-bottom-width: 0em; |
| .olh0 | outline-left-width: 0em; outline-right-width: 0em; |
| .ol1 | outline-width: 0.08333em; |
| .olt1 | outline-top-width: 0.08333em; |
| .olr1 | outline-right-width: 0.08333em; |
| .olb1 | outline-bottom-width: 0.08333em; |
| .oll1 | outline-left-width: 0.08333em; |
| .olv1 | outline-top-width: 0.08333em; outline-bottom-width: 0.08333em; |
| .olh1 | outline-left-width: 0.08333em; outline-right-width: 0.08333em; |
| .ol2 | outline-width: 0.16667em; |
| .olt2 | outline-top-width: 0.16667em; |
| .olr2 | outline-right-width: 0.16667em; |
| .olb2 | outline-bottom-width: 0.16667em; |
| .oll2 | outline-left-width: 0.16667em; |
| .olv2 | outline-top-width: 0.16667em; outline-bottom-width: 0.16667em; |
| .olh2 | outline-left-width: 0.16667em; outline-right-width: 0.16667em; |
| .ol3 | outline-width: 0.25em; |
| .olt3 | outline-top-width: 0.25em; |
| .olr3 | outline-right-width: 0.25em; |
| .olb3 | outline-bottom-width: 0.25em; |
| .oll3 | outline-left-width: 0.25em; |
| .olv3 | outline-top-width: 0.25em; outline-bottom-width: 0.25em; |
| .olh3 | outline-left-width: 0.25em; outline-right-width: 0.25em; |
| .ol4 | outline-width: 0.33333em; |
| .olt4 | outline-top-width: 0.33333em; |
| .olr4 | outline-right-width: 0.33333em; |
| .olb4 | outline-bottom-width: 0.33333em; |
| .oll4 | outline-left-width: 0.33333em; |
| .olv4 | outline-top-width: 0.33333em; outline-bottom-width: 0.33333em; |
| .olh4 | outline-left-width: 0.33333em; outline-right-width: 0.33333em; |
| .ol5 | outline-width: 0.41667em; |
| .olt5 | outline-top-width: 0.41667em; |
| .olr5 | outline-right-width: 0.41667em; |
| .olb5 | outline-bottom-width: 0.41667em; |
| .oll5 | outline-left-width: 0.41667em; |
| .olv5 | outline-top-width: 0.41667em; outline-bottom-width: 0.41667em; |
| .olh5 | outline-left-width: 0.41667em; outline-right-width: 0.41667em; |
| .ol6 | outline-width: 0.5em; |
| .olt6 | outline-top-width: 0.5em; |
| .olr6 | outline-right-width: 0.5em; |
| .olb6 | outline-bottom-width: 0.5em; |
| .oll6 | outline-left-width: 0.5em; |
| .olv6 | outline-top-width: 0.5em; outline-bottom-width: 0.5em; |
| .olh6 | outline-left-width: 0.5em; outline-right-width: 0.5em; |
| .ol7 | outline-width: 0.58333em; |
| .olt7 | outline-top-width: 0.58333em; |
| .olr7 | outline-right-width: 0.58333em; |
| .olb7 | outline-bottom-width: 0.58333em; |
| .oll7 | outline-left-width: 0.58333em; |
| .olv7 | outline-top-width: 0.58333em; outline-bottom-width: 0.58333em; |
| .olh7 | outline-left-width: 0.58333em; outline-right-width: 0.58333em; |
| .ol8 | outline-width: 0.66667em; |
| .olt8 | outline-top-width: 0.66667em; |
| .olr8 | outline-right-width: 0.66667em; |
| .olb8 | outline-bottom-width: 0.66667em; |
| .oll8 | outline-left-width: 0.66667em; |
| .olv8 | outline-top-width: 0.66667em; outline-bottom-width: 0.66667em; |
| .olh8 | outline-left-width: 0.66667em; outline-right-width: 0.66667em; |

## Flexbox

| Style | Css
|-------|---------------------------------
| .flx0 | -webkit-box-flex: 0; -webkit-flex: 0; -ms-flex: 0; flex: 0; |
| .flx1 | -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; |
| .flx2 | -webkit-box-flex: 2; -webkit-flex: 2; -ms-flex: 2; flex: 2; |
| .flx3 | -webkit-box-flex: 3; -webkit-flex: 3; -ms-flex: 3; flex: 3; |
| .flx4 | -webkit-box-flex: 4; -webkit-flex: 4; -ms-flex: 4; flex: 4; |
| .flx5 | -webkit-box-flex: 5; -webkit-flex: 5; -ms-flex: 5; flex: 5; |
| .flx6 | -webkit-box-flex: 6; -webkit-flex: 6; -ms-flex: 6; flex: 6; |
| .flx7 | -webkit-box-flex: 7; -webkit-flex: 7; -ms-flex: 7; flex: 7; |
| .flx8 | -webkit-box-flex: 8; -webkit-flex: 8; -ms-flex: 8; flex: 8; |
| .flx9 | -webkit-box-flex: 9; -webkit-flex: 9; -ms-flex: 9; flex: 9; |
| .flx10 | -webkit-box-flex: 10; -webkit-flex: 10; -ms-flex: 10; flex: 10; |
| .flx | display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; |
| .flxr | -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; |
| .flxc | -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; |
| .flxrr | -webkit-box-orient: horizontal; -webkit-box-direction: reverse; -webkit-flex-direction: row-reverse; -ms-flex-direction: row-reverse; flex-direction: row-reverse; |
| .flxcr | -webkit-box-orient: vertical; -webkit-box-direction: reverse; -webkit-flex-direction: column-reverse; -ms-flex-direction: column-reverse; flex-direction: column-reverse; |
| .flxw | -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; |
| .aifs | -webkit-box-align: start; -webkit-align-items: flex-start; -ms-flex-align: start; align-items: flex-start; |
| .aic | -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; |
| .aife | -webkit-box-align: end; -webkit-align-items: flex-end; -ms-flex-align: end; align-items: flex-end; |
| .ais | -webkit-box-align: stretch; -webkit-align-items: stretch; -ms-flex-align: stretch; align-items: stretch; |
| .asfs | -webkit-align-self: flex-start; -ms-flex-item-align: start; align-self: flex-start; |
| .asc | -webkit-align-self: center; -ms-flex-item-align: center; align-self: center; |
| .asfe | -webkit-align-self: flex-end; -ms-flex-item-align: end; align-self: flex-end; |
| .ass | -webkit-align-self: stretch; -ms-flex-item-align: stretch; align-self: stretch; |
| .jcfs | -webkit-box-pack: start; -webkit-justify-content: flex-start; -ms-flex-pack: start; justify-content: flex-start; |
| .jcfe | -webkit-box-pack: end; -webkit-justify-content: flex-end; -ms-flex-pack: end; justify-content: flex-end; |
| .jcc | -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; |
| .jcsb | -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; |
| .jcsa | -webkit-justify-content: space-around; -ms-flex-pack: distribute; justify-content: space-around; |

## Font Weight

| Style | Css
|-------|---------------------------------
| .fw1 | font-weight: 100; |
| .fw2 | font-weight: 200; |
| .fw3 | font-weight: 300; |
| .fw4 | font-weight: 400; |
| .fw5 | font-weight: 500; |
| .fw6 | font-weight: 600; |
| .fw7 | font-weight: 700; |
| .fw8 | font-weight: 800; |
| .fw9 | font-weight: 900; |

## Opacity

| Style | Css
|-------|---------------------------------
| .o0 | opacity: 0; |
| .o1 | opacity: 0.1; |
| .o2 | opacity: 0.2; |
| .o3 | opacity: 0.3; |
| .o4 | opacity: 0.4; |
| .o5 | opacity: 0.5; |
| .o6 | opacity: 0.6; |
| .o7 | opacity: 0.7; |
| .o8 | opacity: 0.8; |
| .o9 | opacity: 0.9; |
| .o10 | opacity: 1; |

## Image

| Style | Css
|-------|---------------------------------
| img | background-repeat: no-repeat; background-size: contain; -o-object-fit: contain; object-fit: contain; -o-object-position: 0 50%; object-position: 0 50%; |
| img.center | -o-object-position: 50% 50%; object-position: 50% 50%; |
| img.right | -o-object-position: 100% 50%; object-position: 100% 50%; |

## Shadow

| Style | Css
|-------|---------------------------------
| .shadow-0 | box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3); |
| .shadow-1 | box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3); |
| .shadow-2 | box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3); |
| .shadow-3 | box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.3); |
| .shadow-4 | box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3); |
| .shadow-5 | box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.3); |
| .shadow-6 | box-shadow: 6px 6px 30px rgba(0, 0, 0, 0.3); |

## Text

| Style | Css
|-------|---------------------------------
| .i | font-style: italic; |
| .b | font-weight: bold; |
| .line-through | text-decoration: line-through; |
| .tl | text-align: left; |
| .tc | text-align: center; |
| .tr | text-align: right; |
| .tj | text-align: justify; |
| .uc | text-transform: uppercase; |
| .lc | text-transform: lowercase; |
| .ca | text-transform: capitalize; |

## Margin

| Style | Css
|-------|---------------------------------
| .ma0 | margin: 0em; |
| .ma1 | margin: 0.25em; |
| .ma2 | margin: 0.5em; |
| .ma3 | margin: 0.75em; |
| .ma4 | margin: 1em; |
| .ma5 | margin: 1.25em; |
| .ma6 | margin: 1.5em; |
| .ma7 | margin: 1.75em; |
| .ma8 | margin: 2em; |
| .ma9 | margin: 2.25em; |
| .ma10 | margin: 2.5em; |
| .ma11 | margin: 2.75em; |
| .ma12 | margin: 3em; |
| .ma13 | margin: 3.25em; |
| .ma14 | margin: 3.5em; |
| .ma15 | margin: 3.75em; |
| .ma16 | margin: 4em; |
| .ma17 | margin: 4.25em; |
| .ma18 | margin: 4.5em; |
| .ma19 | margin: 4.75em; |
| .ma20 | margin: 5em; |

## Margin Bottom

| Style | Css
|-------|---------------------------------
| .mb0 | margin-bottom: 0em; |
| .mb1 | margin-bottom: 0.25em; |
| .mb2 | margin-bottom: 0.5em; |
| .mb3 | margin-bottom: 0.75em; |
| .mb4 | margin-bottom: 1em; |
| .mb5 | margin-bottom: 1.25em; |
| .mb6 | margin-bottom: 1.5em; |
| .mb7 | margin-bottom: 1.75em; |
| .mb8 | margin-bottom: 2em; |
| .mb9 | margin-bottom: 2.25em; |
| .mb10 | margin-bottom: 2.5em; |
| .mb11 | margin-bottom: 2.75em; |
| .mb12 | margin-bottom: 3em; |
| .mb13 | margin-bottom: 3.25em; |
| .mb14 | margin-bottom: 3.5em; |
| .mb15 | margin-bottom: 3.75em; |
| .mb16 | margin-bottom: 4em; |
| .mb17 | margin-bottom: 4.25em; |
| .mb18 | margin-bottom: 4.5em; |
| .mb19 | margin-bottom: 4.75em; |
| .mb20 | margin-bottom: 5em; |

## Margin Left

| Style | Css
|-------|---------------------------------
| .ml0 | margin-left: 0em; |
| .ml1 | margin-left: 0.25em; |
| .ml2 | margin-left: 0.5em; |
| .ml3 | margin-left: 0.75em; |
| .ml4 | margin-left: 1em; |
| .ml5 | margin-left: 1.25em; |
| .ml6 | margin-left: 1.5em; |
| .ml7 | margin-left: 1.75em; |
| .ml8 | margin-left: 2em; |
| .ml9 | margin-left: 2.25em; |
| .ml10 | margin-left: 2.5em; |
| .ml11 | margin-left: 2.75em; |
| .ml12 | margin-left: 3em; |
| .ml13 | margin-left: 3.25em; |
| .ml14 | margin-left: 3.5em; |
| .ml15 | margin-left: 3.75em; |
| .ml16 | margin-left: 4em; |
| .ml17 | margin-left: 4.25em; |
| .ml18 | margin-left: 4.5em; |
| .ml19 | margin-left: 4.75em; |
| .ml20 | margin-left: 5em; |

## Margin Right

| Style | Css
|-------|---------------------------------
| .mr0 | margin-right: 0em; |
| .mr1 | margin-right: 0.25em; |
| .mr2 | margin-right: 0.5em; |
| .mr3 | margin-right: 0.75em; |
| .mr4 | margin-right: 1em; |
| .mr5 | margin-right: 1.25em; |
| .mr6 | margin-right: 1.5em; |
| .mr7 | margin-right: 1.75em; |
| .mr8 | margin-right: 2em; |
| .mr9 | margin-right: 2.25em; |
| .mr10 | margin-right: 2.5em; |
| .mr11 | margin-right: 2.75em; |
| .mr12 | margin-right: 3em; |
| .mr13 | margin-right: 3.25em; |
| .mr14 | margin-right: 3.5em; |
| .mr15 | margin-right: 3.75em; |
| .mr16 | margin-right: 4em; |
| .mr17 | margin-right: 4.25em; |
| .mr18 | margin-right: 4.5em; |
| .mr19 | margin-right: 4.75em; |
| .mr20 | margin-right: 5em; |

## Margin Top

| Style | Css
|-------|---------------------------------
| .mt0 | margin-top: 0em; |
| .mt1 | margin-top: 0.25em; |
| .mt2 | margin-top: 0.5em; |
| .mt3 | margin-top: 0.75em; |
| .mt4 | margin-top: 1em; |
| .mt5 | margin-top: 1.25em; |
| .mt6 | margin-top: 1.5em; |
| .mt7 | margin-top: 1.75em; |
| .mt8 | margin-top: 2em; |
| .mt9 | margin-top: 2.25em; |
| .mt10 | margin-top: 2.5em; |
| .mt11 | margin-top: 2.75em; |
| .mt12 | margin-top: 3em; |
| .mt13 | margin-top: 3.25em; |
| .mt14 | margin-top: 3.5em; |
| .mt15 | margin-top: 3.75em; |
| .mt16 | margin-top: 4em; |
| .mt17 | margin-top: 4.25em; |
| .mt18 | margin-top: 4.5em; |
| .mt19 | margin-top: 4.75em; |
| .mt20 | margin-top: 5em; |

## Margin Horizontal

| Style | Css
|-------|---------------------------------
| .mh0 | margin-left: 0em; margin-right: 0em; |
| .mh1 | margin-left: 0.25em; margin-right: 0.25em; |
| .mh2 | margin-left: 0.5em; margin-right: 0.5em; |
| .mh3 | margin-left: 0.75em; margin-right: 0.75em; |
| .mh4 | margin-left: 1em; margin-right: 1em; |
| .mh5 | margin-left: 1.25em; margin-right: 1.25em; |
| .mh6 | margin-left: 1.5em; margin-right: 1.5em; |
| .mh7 | margin-left: 1.75em; margin-right: 1.75em; |
| .mh8 | margin-left: 2em; margin-right: 2em; |
| .mh9 | margin-left: 2.25em; margin-right: 2.25em; |
| .mh10 | margin-left: 2.5em; margin-right: 2.5em; |
| .mh11 | margin-left: 2.75em; margin-right: 2.75em; |
| .mh12 | margin-left: 3em; margin-right: 3em; |
| .mh13 | margin-left: 3.25em; margin-right: 3.25em; |
| .mh14 | margin-left: 3.5em; margin-right: 3.5em; |
| .mh15 | margin-left: 3.75em; margin-right: 3.75em; |
| .mh16 | margin-left: 4em; margin-right: 4em; |
| .mh17 | margin-left: 4.25em; margin-right: 4.25em; |
| .mh18 | margin-left: 4.5em; margin-right: 4.5em; |
| .mh19 | margin-left: 4.75em; margin-right: 4.75em; |
| .mh20 | margin-left: 5em; margin-right: 5em; |

## Margin Vertical

| Style | Css
|-------|---------------------------------
| .mv0 | margin-top: 0em; margin-bottom: 0em; |
| .mv1 | margin-top: 0.25em; margin-bottom: 0.25em; |
| .mv2 | margin-top: 0.5em; margin-bottom: 0.5em; |
| .mv3 | margin-top: 0.75em; margin-bottom: 0.75em; |
| .mv4 | margin-top: 1em; margin-bottom: 1em; |
| .mv5 | margin-top: 1.25em; margin-bottom: 1.25em; |
| .mv6 | margin-top: 1.5em; margin-bottom: 1.5em; |
| .mv7 | margin-top: 1.75em; margin-bottom: 1.75em; |
| .mv8 | margin-top: 2em; margin-bottom: 2em; |
| .mv9 | margin-top: 2.25em; margin-bottom: 2.25em; |
| .mv10 | margin-top: 2.5em; margin-bottom: 2.5em; |
| .mv11 | margin-top: 2.75em; margin-bottom: 2.75em; |
| .mv12 | margin-top: 3em; margin-bottom: 3em; |
| .mv13 | margin-top: 3.25em; margin-bottom: 3.25em; |
| .mv14 | margin-top: 3.5em; margin-bottom: 3.5em; |
| .mv15 | margin-top: 3.75em; margin-bottom: 3.75em; |
| .mv16 | margin-top: 4em; margin-bottom: 4em; |
| .mv17 | margin-top: 4.25em; margin-bottom: 4.25em; |
| .mv18 | margin-top: 4.5em; margin-bottom: 4.5em; |
| .mv19 | margin-top: 4.75em; margin-bottom: 4.75em; |
| .mv20 | margin-top: 5em; margin-bottom: 5em; |

## Padding

| Style | Css
|-------|---------------------------------
| .pa0 | padding: 0em; |
| .pa1 | padding: 0.25em; |
| .pa2 | padding: 0.5em; |
| .pa3 | padding: 0.75em; |
| .pa4 | padding: 1em; |
| .pa5 | padding: 1.25em; |
| .pa6 | padding: 1.5em; |
| .pa7 | padding: 1.75em; |
| .pa8 | padding: 2em; |
| .pa9 | padding: 2.25em; |
| .pa10 | padding: 2.5em; |
| .pa11 | padding: 2.75em; |
| .pa12 | padding: 3em; |
| .pa13 | padding: 3.25em; |
| .pa14 | padding: 3.5em; |
| .pa15 | padding: 3.75em; |
| .pa16 | padding: 4em; |
| .pa17 | padding: 4.25em; |
| .pa18 | padding: 4.5em; |
| .pa19 | padding: 4.75em; |
| .pa20 | padding: 5em; |

## Padding Bottom

| Style | Css
|-------|---------------------------------
| .pb0 | padding-bottom: 0em; |
| .pb1 | padding-bottom: 0.25em; |
| .pb2 | padding-bottom: 0.5em; |
| .pb3 | padding-bottom: 0.75em; |
| .pb4 | padding-bottom: 1em; |
| .pb5 | padding-bottom: 1.25em; |
| .pb6 | padding-bottom: 1.5em; |
| .pb7 | padding-bottom: 1.75em; |
| .pb8 | padding-bottom: 2em; |
| .pb9 | padding-bottom: 2.25em; |
| .pb10 | padding-bottom: 2.5em; |
| .pb11 | padding-bottom: 2.75em; |
| .pb12 | padding-bottom: 3em; |
| .pb13 | padding-bottom: 3.25em; |
| .pb14 | padding-bottom: 3.5em; |
| .pb15 | padding-bottom: 3.75em; |
| .pb16 | padding-bottom: 4em; |
| .pb17 | padding-bottom: 4.25em; |
| .pb18 | padding-bottom: 4.5em; |
| .pb19 | padding-bottom: 4.75em; |
| .pb20 | padding-bottom: 5em; |

## Padding Left

| Style | Css
|-------|---------------------------------
| .pl0 | padding-left: 0em; |
| .pl1 | padding-left: 0.25em; |
| .pl2 | padding-left: 0.5em; |
| .pl3 | padding-left: 0.75em; |
| .pl4 | padding-left: 1em; |
| .pl5 | padding-left: 1.25em; |
| .pl6 | padding-left: 1.5em; |
| .pl7 | padding-left: 1.75em; |
| .pl8 | padding-left: 2em; |
| .pl9 | padding-left: 2.25em; |
| .pl10 | padding-left: 2.5em; |
| .pl11 | padding-left: 2.75em; |
| .pl12 | padding-left: 3em; |
| .pl13 | padding-left: 3.25em; |
| .pl14 | padding-left: 3.5em; |
| .pl15 | padding-left: 3.75em; |
| .pl16 | padding-left: 4em; |
| .pl17 | padding-left: 4.25em; |
| .pl18 | padding-left: 4.5em; |
| .pl19 | padding-left: 4.75em; |
| .pl20 | padding-left: 5em; |

## Padding Right

| Style | Css
|-------|---------------------------------
| .pr0 | padding-right: 0em; |
| .pr1 | padding-right: 0.25em; |
| .pr2 | padding-right: 0.5em; |
| .pr3 | padding-right: 0.75em; |
| .pr4 | padding-right: 1em; |
| .pr5 | padding-right: 1.25em; |
| .pr6 | padding-right: 1.5em; |
| .pr7 | padding-right: 1.75em; |
| .pr8 | padding-right: 2em; |
| .pr9 | padding-right: 2.25em; |
| .pr10 | padding-right: 2.5em; |
| .pr11 | padding-right: 2.75em; |
| .pr12 | padding-right: 3em; |
| .pr13 | padding-right: 3.25em; |
| .pr14 | padding-right: 3.5em; |
| .pr15 | padding-right: 3.75em; |
| .pr16 | padding-right: 4em; |
| .pr17 | padding-right: 4.25em; |
| .pr18 | padding-right: 4.5em; |
| .pr19 | padding-right: 4.75em; |
| .pr20 | padding-right: 5em; |

## Padding Top

| Style | Css
|-------|---------------------------------
| .pt0 | padding-top: 0em; |
| .pt1 | padding-top: 0.25em; |
| .pt2 | padding-top: 0.5em; |
| .pt3 | padding-top: 0.75em; |
| .pt4 | padding-top: 1em; |
| .pt5 | padding-top: 1.25em; |
| .pt6 | padding-top: 1.5em; |
| .pt7 | padding-top: 1.75em; |
| .pt8 | padding-top: 2em; |
| .pt9 | padding-top: 2.25em; |
| .pt10 | padding-top: 2.5em; |
| .pt11 | padding-top: 2.75em; |
| .pt12 | padding-top: 3em; |
| .pt13 | padding-top: 3.25em; |
| .pt14 | padding-top: 3.5em; |
| .pt15 | padding-top: 3.75em; |
| .pt16 | padding-top: 4em; |
| .pt17 | padding-top: 4.25em; |
| .pt18 | padding-top: 4.5em; |
| .pt19 | padding-top: 4.75em; |
| .pt20 | padding-top: 5em; |

## Padding Horizontal

| Style | Css
|-------|---------------------------------
| .ph0 | padding-left: 0em; padding-right: 0em; |
| .ph1 | padding-left: 0.25em; padding-right: 0.25em; |
| .ph2 | padding-left: 0.5em; padding-right: 0.5em; |
| .ph3 | padding-left: 0.75em; padding-right: 0.75em; |
| .ph4 | padding-left: 1em; padding-right: 1em; |
| .ph5 | padding-left: 1.25em; padding-right: 1.25em; |
| .ph6 | padding-left: 1.5em; padding-right: 1.5em; |
| .ph7 | padding-left: 1.75em; padding-right: 1.75em; |
| .ph8 | padding-left: 2em; padding-right: 2em; |
| .ph9 | padding-left: 2.25em; padding-right: 2.25em; |
| .ph10 | padding-left: 2.5em; padding-right: 2.5em; |
| .ph11 | padding-left: 2.75em; padding-right: 2.75em; |
| .ph12 | padding-left: 3em; padding-right: 3em; |
| .ph13 | padding-left: 3.25em; padding-right: 3.25em; |
| .ph14 | padding-left: 3.5em; padding-right: 3.5em; |
| .ph15 | padding-left: 3.75em; padding-right: 3.75em; |
| .ph16 | padding-left: 4em; padding-right: 4em; |
| .ph17 | padding-left: 4.25em; padding-right: 4.25em; |
| .ph18 | padding-left: 4.5em; padding-right: 4.5em; |
| .ph19 | padding-left: 4.75em; padding-right: 4.75em; |
| .ph20 | padding-left: 5em; padding-right: 5em; |

## Padding Vertical

| Style | Css
|-------|---------------------------------
| .pv0 | padding-top: 0em; padding-bottom: 0em; |
| .pv1 | padding-top: 0.25em; padding-bottom: 0.25em; |
| .pv2 | padding-top: 0.5em; padding-bottom: 0.5em; |
| .pv3 | padding-top: 0.75em; padding-bottom: 0.75em; |
| .pv4 | padding-top: 1em; padding-bottom: 1em; |
| .pv5 | padding-top: 1.25em; padding-bottom: 1.25em; |
| .pv6 | padding-top: 1.5em; padding-bottom: 1.5em; |
| .pv7 | padding-top: 1.75em; padding-bottom: 1.75em; |
| .pv8 | padding-top: 2em; padding-bottom: 2em; |
| .pv9 | padding-top: 2.25em; padding-bottom: 2.25em; |
| .pv10 | padding-top: 2.5em; padding-bottom: 2.5em; |
| .pv11 | padding-top: 2.75em; padding-bottom: 2.75em; |
| .pv12 | padding-top: 3em; padding-bottom: 3em; |
| .pv13 | padding-top: 3.25em; padding-bottom: 3.25em; |
| .pv14 | padding-top: 3.5em; padding-bottom: 3.5em; |
| .pv15 | padding-top: 3.75em; padding-bottom: 3.75em; |
| .pv16 | padding-top: 4em; padding-bottom: 4em; |
| .pv17 | padding-top: 4.25em; padding-bottom: 4.25em; |
| .pv18 | padding-top: 4.5em; padding-bottom: 4.5em; |
| .pv19 | padding-top: 4.75em; padding-bottom: 4.75em; |
| .pv20 | padding-top: 5em; padding-bottom: 5em; |

## Font Size

| Style | Css
|-------|---------------------------------
| .f0 | font-size: 0em; |
| .f1 | font-size: 0.25em; |
| .f2 | font-size: 0.5em; |
| .f3 | font-size: 0.75em; |
| .f4 | font-size: 1em; |
| .f5 | font-size: 1.25em; |
| .f6 | font-size: 1.5em; |
| .f7 | font-size: 1.75em; |
| .f8 | font-size: 2em; |
| .f9 | font-size: 2.25em; |
| .f10 | font-size: 2.5em; |
| .f11 | font-size: 2.75em; |
| .f12 | font-size: 3em; |
| .f13 | font-size: 3.25em; |
| .f14 | font-size: 3.5em; |
| .f15 | font-size: 3.75em; |
| .f16 | font-size: 4em; |
| .f17 | font-size: 4.25em; |
| .f18 | font-size: 4.5em; |
| .f19 | font-size: 4.75em; |
| .f20 | font-size: 5em; |

## Left

| Style | Css
|-------|---------------------------------
| .l0 | left: 0em; |
| .l1 | left: 0.25em; |
| .l2 | left: 0.5em; |
| .l3 | left: 0.75em; |
| .l4 | left: 1em; |
| .l5 | left: 1.25em; |
| .l6 | left: 1.5em; |
| .l7 | left: 1.75em; |
| .l8 | left: 2em; |
| .l9 | left: 2.25em; |
| .l10 | left: 2.5em; |
| .l11 | left: 2.75em; |
| .l12 | left: 3em; |
| .l13 | left: 3.25em; |
| .l14 | left: 3.5em; |
| .l15 | left: 3.75em; |
| .l16 | left: 4em; |
| .l17 | left: 4.25em; |
| .l18 | left: 4.5em; |
| .l19 | left: 4.75em; |
| .l20 | left: 5em; |
| .l21 | left: 5.25em; |
| .l22 | left: 5.5em; |
| .l23 | left: 5.75em; |
| .l24 | left: 6em; |
| .l25 | left: 6.25em; |
| .l26 | left: 6.5em; |
| .l27 | left: 6.75em; |
| .l28 | left: 7em; |
| .l29 | left: 7.25em; |
| .l30 | left: 7.5em; |
| .l31 | left: 7.75em; |
| .l32 | left: 8em; |
| .l33 | left: 8.25em; |
| .l34 | left: 8.5em; |
| .l35 | left: 8.75em; |
| .l36 | left: 9em; |
| .l37 | left: 9.25em; |
| .l38 | left: 9.5em; |
| .l39 | left: 9.75em; |
| .l40 | left: 10em; |
| .l41 | left: 10.25em; |
| .l42 | left: 10.5em; |
| .l43 | left: 10.75em; |
| .l44 | left: 11em; |
| .l45 | left: 11.25em; |
| .l46 | left: 11.5em; |
| .l47 | left: 11.75em; |
| .l48 | left: 12em; |
| .l49 | left: 12.25em; |
| .l50 | left: 12.5em; |
| .l51 | left: 12.75em; |
| .l52 | left: 13em; |
| .l53 | left: 13.25em; |
| .l54 | left: 13.5em; |
| .l55 | left: 13.75em; |
| .l56 | left: 14em; |
| .l57 | left: 14.25em; |
| .l58 | left: 14.5em; |
| .l59 | left: 14.75em; |
| .l60 | left: 15em; |
| .l61 | left: 15.25em; |
| .l62 | left: 15.5em; |
| .l63 | left: 15.75em; |
| .l64 | left: 16em; |
| .l65 | left: 16.25em; |
| .l66 | left: 16.5em; |
| .l67 | left: 16.75em; |
| .l68 | left: 17em; |
| .l69 | left: 17.25em; |
| .l70 | left: 17.5em; |
| .l71 | left: 17.75em; |
| .l72 | left: 18em; |
| .l73 | left: 18.25em; |
| .l74 | left: 18.5em; |
| .l75 | left: 18.75em; |
| .l76 | left: 19em; |
| .l77 | left: 19.25em; |
| .l78 | left: 19.5em; |
| .l79 | left: 19.75em; |
| .l80 | left: 20em; |
| .l81 | left: 20.25em; |
| .l82 | left: 20.5em; |
| .l83 | left: 20.75em; |
| .l84 | left: 21em; |
| .l85 | left: 21.25em; |
| .l86 | left: 21.5em; |
| .l87 | left: 21.75em; |
| .l88 | left: 22em; |
| .l89 | left: 22.25em; |
| .l90 | left: 22.5em; |
| .l91 | left: 22.75em; |
| .l92 | left: 23em; |
| .l93 | left: 23.25em; |
| .l94 | left: 23.5em; |
| .l95 | left: 23.75em; |
| .l96 | left: 24em; |
| .l97 | left: 24.25em; |
| .l98 | left: 24.5em; |
| .l99 | left: 24.75em; |
| .l100 | left: 100%; |

## Top

| Style | Css
|-------|---------------------------------
| .t0 | top: 0em; |
| .t1 | top: 0.25em; |
| .t2 | top: 0.5em; |
| .t3 | top: 0.75em; |
| .t4 | top: 1em; |
| .t5 | top: 1.25em; |
| .t6 | top: 1.5em; |
| .t7 | top: 1.75em; |
| .t8 | top: 2em; |
| .t9 | top: 2.25em; |
| .t10 | top: 2.5em; |
| .t11 | top: 2.75em; |
| .t12 | top: 3em; |
| .t13 | top: 3.25em; |
| .t14 | top: 3.5em; |
| .t15 | top: 3.75em; |
| .t16 | top: 4em; |
| .t17 | top: 4.25em; |
| .t18 | top: 4.5em; |
| .t19 | top: 4.75em; |
| .t20 | top: 5em; |
| .t21 | top: 5.25em; |
| .t22 | top: 5.5em; |
| .t23 | top: 5.75em; |
| .t24 | top: 6em; |
| .t25 | top: 6.25em; |
| .t26 | top: 6.5em; |
| .t27 | top: 6.75em; |
| .t28 | top: 7em; |
| .t29 | top: 7.25em; |
| .t30 | top: 7.5em; |
| .t31 | top: 7.75em; |
| .t32 | top: 8em; |
| .t33 | top: 8.25em; |
| .t34 | top: 8.5em; |
| .t35 | top: 8.75em; |
| .t36 | top: 9em; |
| .t37 | top: 9.25em; |
| .t38 | top: 9.5em; |
| .t39 | top: 9.75em; |
| .t40 | top: 10em; |
| .t41 | top: 10.25em; |
| .t42 | top: 10.5em; |
| .t43 | top: 10.75em; |
| .t44 | top: 11em; |
| .t45 | top: 11.25em; |
| .t46 | top: 11.5em; |
| .t47 | top: 11.75em; |
| .t48 | top: 12em; |
| .t49 | top: 12.25em; |
| .t50 | top: 12.5em; |
| .t51 | top: 12.75em; |
| .t52 | top: 13em; |
| .t53 | top: 13.25em; |
| .t54 | top: 13.5em; |
| .t55 | top: 13.75em; |
| .t56 | top: 14em; |
| .t57 | top: 14.25em; |
| .t58 | top: 14.5em; |
| .t59 | top: 14.75em; |
| .t60 | top: 15em; |
| .t61 | top: 15.25em; |
| .t62 | top: 15.5em; |
| .t63 | top: 15.75em; |
| .t64 | top: 16em; |
| .t65 | top: 16.25em; |
| .t66 | top: 16.5em; |
| .t67 | top: 16.75em; |
| .t68 | top: 17em; |
| .t69 | top: 17.25em; |
| .t70 | top: 17.5em; |
| .t71 | top: 17.75em; |
| .t72 | top: 18em; |
| .t73 | top: 18.25em; |
| .t74 | top: 18.5em; |
| .t75 | top: 18.75em; |
| .t76 | top: 19em; |
| .t77 | top: 19.25em; |
| .t78 | top: 19.5em; |
| .t79 | top: 19.75em; |
| .t80 | top: 20em; |
| .t81 | top: 20.25em; |
| .t82 | top: 20.5em; |
| .t83 | top: 20.75em; |
| .t84 | top: 21em; |
| .t85 | top: 21.25em; |
| .t86 | top: 21.5em; |
| .t87 | top: 21.75em; |
| .t88 | top: 22em; |
| .t89 | top: 22.25em; |
| .t90 | top: 22.5em; |
| .t91 | top: 22.75em; |
| .t92 | top: 23em; |
| .t93 | top: 23.25em; |
| .t94 | top: 23.5em; |
| .t95 | top: 23.75em; |
| .t96 | top: 24em; |
| .t97 | top: 24.25em; |
| .t98 | top: 24.5em; |
| .t99 | top: 24.75em; |
| .t100 | top: 100%; |

## Line Height

| Style | Css
|-------|---------------------------------
| .lh0 | line-height: 0em; |
| .lh1 | line-height: 0.25em; |
| .lh2 | line-height: 0.5em; |
| .lh3 | line-height: 0.75em; |
| .lh4 | line-height: 1em; |
| .lh5 | line-height: 1.25em; |
| .lh6 | line-height: 1.5em; |
| .lh7 | line-height: 1.75em; |
| .lh8 | line-height: 2em; |
| .lh9 | line-height: 2.25em; |
| .lh10 | line-height: 2.5em; |
| .lh11 | line-height: 2.75em; |
| .lh12 | line-height: 3em; |
| .lh13 | line-height: 3.25em; |
| .lh14 | line-height: 3.5em; |
| .lh15 | line-height: 3.75em; |
| .lh16 | line-height: 4em; |
| .lh17 | line-height: 4.25em; |
| .lh18 | line-height: 4.5em; |
| .lh19 | line-height: 4.75em; |
| .lh20 | line-height: 5em; |
| .lh21 | line-height: 5.25em; |
| .lh22 | line-height: 5.5em; |
| .lh23 | line-height: 5.75em; |
| .lh24 | line-height: 6em; |
| .lh25 | line-height: 6.25em; |
| .lh26 | line-height: 6.5em; |
| .lh27 | line-height: 6.75em; |
| .lh28 | line-height: 7em; |
| .lh29 | line-height: 7.25em; |
| .lh30 | line-height: 7.5em; |
| .lh31 | line-height: 7.75em; |
| .lh32 | line-height: 8em; |
| .lh33 | line-height: 8.25em; |
| .lh34 | line-height: 8.5em; |
| .lh35 | line-height: 8.75em; |
| .lh36 | line-height: 9em; |
| .lh37 | line-height: 9.25em; |
| .lh38 | line-height: 9.5em; |
| .lh39 | line-height: 9.75em; |
| .lh40 | line-height: 10em; |
| .lh41 | line-height: 10.25em; |
| .lh42 | line-height: 10.5em; |
| .lh43 | line-height: 10.75em; |
| .lh44 | line-height: 11em; |
| .lh45 | line-height: 11.25em; |
| .lh46 | line-height: 11.5em; |
| .lh47 | line-height: 11.75em; |
| .lh48 | line-height: 12em; |
| .lh49 | line-height: 12.25em; |
| .lh50 | line-height: 12.5em; |
| .lh51 | line-height: 12.75em; |
| .lh52 | line-height: 13em; |
| .lh53 | line-height: 13.25em; |
| .lh54 | line-height: 13.5em; |
| .lh55 | line-height: 13.75em; |
| .lh56 | line-height: 14em; |
| .lh57 | line-height: 14.25em; |
| .lh58 | line-height: 14.5em; |
| .lh59 | line-height: 14.75em; |
| .lh60 | line-height: 15em; |
| .lh61 | line-height: 15.25em; |
| .lh62 | line-height: 15.5em; |
| .lh63 | line-height: 15.75em; |
| .lh64 | line-height: 16em; |
| .lh65 | line-height: 16.25em; |
| .lh66 | line-height: 16.5em; |
| .lh67 | line-height: 16.75em; |
| .lh68 | line-height: 17em; |
| .lh69 | line-height: 17.25em; |
| .lh70 | line-height: 17.5em; |
| .lh71 | line-height: 17.75em; |
| .lh72 | line-height: 18em; |
| .lh73 | line-height: 18.25em; |
| .lh74 | line-height: 18.5em; |
| .lh75 | line-height: 18.75em; |
| .lh76 | line-height: 19em; |
| .lh77 | line-height: 19.25em; |
| .lh78 | line-height: 19.5em; |
| .lh79 | line-height: 19.75em; |
| .lh80 | line-height: 20em; |
| .lh81 | line-height: 20.25em; |
| .lh82 | line-height: 20.5em; |
| .lh83 | line-height: 20.75em; |
| .lh84 | line-height: 21em; |
| .lh85 | line-height: 21.25em; |
| .lh86 | line-height: 21.5em; |
| .lh87 | line-height: 21.75em; |
| .lh88 | line-height: 22em; |
| .lh89 | line-height: 22.25em; |
| .lh90 | line-height: 22.5em; |
| .lh91 | line-height: 22.75em; |
| .lh92 | line-height: 23em; |
| .lh93 | line-height: 23.25em; |
| .lh94 | line-height: 23.5em; |
| .lh95 | line-height: 23.75em; |
| .lh96 | line-height: 24em; |
| .lh97 | line-height: 24.25em; |
| .lh98 | line-height: 24.5em; |
| .lh99 | line-height: 24.75em; |
| .lh100 | line-height: 25em; |

## Height

| Style | Css
|-------|---------------------------------
| .h0 | height: 0em; |
| .h1 | height: 0.25em; |
| .h2 | height: 0.5em; |
| .h3 | height: 0.75em; |
| .h4 | height: 1em; |
| .h5 | height: 1.25em; |
| .h6 | height: 1.5em; |
| .h7 | height: 1.75em; |
| .h8 | height: 2em; |
| .h9 | height: 2.25em; |
| .h10 | height: 2.5em; |
| .h11 | height: 2.75em; |
| .h12 | height: 3em; |
| .h13 | height: 3.25em; |
| .h14 | height: 3.5em; |
| .h15 | height: 3.75em; |
| .h16 | height: 4em; |
| .h17 | height: 4.25em; |
| .h18 | height: 4.5em; |
| .h19 | height: 4.75em; |
| .h20 | height: 5em; |
| .h21 | height: 5.25em; |
| .h22 | height: 5.5em; |
| .h23 | height: 5.75em; |
| .h24 | height: 6em; |
| .h25 | height: 6.25em; |
| .h26 | height: 6.5em; |
| .h27 | height: 6.75em; |
| .h28 | height: 7em; |
| .h29 | height: 7.25em; |
| .h30 | height: 7.5em; |
| .h31 | height: 7.75em; |
| .h32 | height: 8em; |
| .h33 | height: 8.25em; |
| .h34 | height: 8.5em; |
| .h35 | height: 8.75em; |
| .h36 | height: 9em; |
| .h37 | height: 9.25em; |
| .h38 | height: 9.5em; |
| .h39 | height: 9.75em; |
| .h40 | height: 10em; |
| .h41 | height: 10.25em; |
| .h42 | height: 10.5em; |
| .h43 | height: 10.75em; |
| .h44 | height: 11em; |
| .h45 | height: 11.25em; |
| .h46 | height: 11.5em; |
| .h47 | height: 11.75em; |
| .h48 | height: 12em; |
| .h49 | height: 12.25em; |
| .h50 | height: 12.5em; |
| .h51 | height: 12.75em; |
| .h52 | height: 13em; |
| .h53 | height: 13.25em; |
| .h54 | height: 13.5em; |
| .h55 | height: 13.75em; |
| .h56 | height: 14em; |
| .h57 | height: 14.25em; |
| .h58 | height: 14.5em; |
| .h59 | height: 14.75em; |
| .h60 | height: 15em; |
| .h61 | height: 15.25em; |
| .h62 | height: 15.5em; |
| .h63 | height: 15.75em; |
| .h64 | height: 16em; |
| .h65 | height: 16.25em; |
| .h66 | height: 16.5em; |
| .h67 | height: 16.75em; |
| .h68 | height: 17em; |
| .h69 | height: 17.25em; |
| .h70 | height: 17.5em; |
| .h71 | height: 17.75em; |
| .h72 | height: 18em; |
| .h73 | height: 18.25em; |
| .h74 | height: 18.5em; |
| .h75 | height: 18.75em; |
| .h76 | height: 19em; |
| .h77 | height: 19.25em; |
| .h78 | height: 19.5em; |
| .h79 | height: 19.75em; |
| .h80 | height: 20em; |
| .h81 | height: 20.25em; |
| .h82 | height: 20.5em; |
| .h83 | height: 20.75em; |
| .h84 | height: 21em; |
| .h85 | height: 21.25em; |
| .h86 | height: 21.5em; |
| .h87 | height: 21.75em; |
| .h88 | height: 22em; |
| .h89 | height: 22.25em; |
| .h90 | height: 22.5em; |
| .h91 | height: 22.75em; |
| .h92 | height: 23em; |
| .h93 | height: 23.25em; |
| .h94 | height: 23.5em; |
| .h95 | height: 23.75em; |
| .h96 | height: 24em; |
| .h97 | height: 24.25em; |
| .h98 | height: 24.5em; |
| .h99 | height: 24.75em; |
| .h100 | height: 100%; |

## Max Height

| Style | Css
|-------|---------------------------------
| .max-h0 | max-height: 0em; |
| .max-h1 | max-height: 0.25em; |
| .max-h2 | max-height: 0.5em; |
| .max-h3 | max-height: 0.75em; |
| .max-h4 | max-height: 1em; |
| .max-h5 | max-height: 1.25em; |
| .max-h6 | max-height: 1.5em; |
| .max-h7 | max-height: 1.75em; |
| .max-h8 | max-height: 2em; |
| .max-h9 | max-height: 2.25em; |
| .max-h10 | max-height: 2.5em; |
| .max-h11 | max-height: 2.75em; |
| .max-h12 | max-height: 3em; |
| .max-h13 | max-height: 3.25em; |
| .max-h14 | max-height: 3.5em; |
| .max-h15 | max-height: 3.75em; |
| .max-h16 | max-height: 4em; |
| .max-h17 | max-height: 4.25em; |
| .max-h18 | max-height: 4.5em; |
| .max-h19 | max-height: 4.75em; |
| .max-h20 | max-height: 5em; |
| .max-h21 | max-height: 5.25em; |
| .max-h22 | max-height: 5.5em; |
| .max-h23 | max-height: 5.75em; |
| .max-h24 | max-height: 6em; |
| .max-h25 | max-height: 6.25em; |
| .max-h26 | max-height: 6.5em; |
| .max-h27 | max-height: 6.75em; |
| .max-h28 | max-height: 7em; |
| .max-h29 | max-height: 7.25em; |
| .max-h30 | max-height: 7.5em; |
| .max-h31 | max-height: 7.75em; |
| .max-h32 | max-height: 8em; |
| .max-h33 | max-height: 8.25em; |
| .max-h34 | max-height: 8.5em; |
| .max-h35 | max-height: 8.75em; |
| .max-h36 | max-height: 9em; |
| .max-h37 | max-height: 9.25em; |
| .max-h38 | max-height: 9.5em; |
| .max-h39 | max-height: 9.75em; |
| .max-h40 | max-height: 10em; |
| .max-h41 | max-height: 10.25em; |
| .max-h42 | max-height: 10.5em; |
| .max-h43 | max-height: 10.75em; |
| .max-h44 | max-height: 11em; |
| .max-h45 | max-height: 11.25em; |
| .max-h46 | max-height: 11.5em; |
| .max-h47 | max-height: 11.75em; |
| .max-h48 | max-height: 12em; |
| .max-h49 | max-height: 12.25em; |
| .max-h50 | max-height: 12.5em; |
| .max-h51 | max-height: 12.75em; |
| .max-h52 | max-height: 13em; |
| .max-h53 | max-height: 13.25em; |
| .max-h54 | max-height: 13.5em; |
| .max-h55 | max-height: 13.75em; |
| .max-h56 | max-height: 14em; |
| .max-h57 | max-height: 14.25em; |
| .max-h58 | max-height: 14.5em; |
| .max-h59 | max-height: 14.75em; |
| .max-h60 | max-height: 15em; |
| .max-h61 | max-height: 15.25em; |
| .max-h62 | max-height: 15.5em; |
| .max-h63 | max-height: 15.75em; |
| .max-h64 | max-height: 16em; |
| .max-h65 | max-height: 16.25em; |
| .max-h66 | max-height: 16.5em; |
| .max-h67 | max-height: 16.75em; |
| .max-h68 | max-height: 17em; |
| .max-h69 | max-height: 17.25em; |
| .max-h70 | max-height: 17.5em; |
| .max-h71 | max-height: 17.75em; |
| .max-h72 | max-height: 18em; |
| .max-h73 | max-height: 18.25em; |
| .max-h74 | max-height: 18.5em; |
| .max-h75 | max-height: 18.75em; |
| .max-h76 | max-height: 19em; |
| .max-h77 | max-height: 19.25em; |
| .max-h78 | max-height: 19.5em; |
| .max-h79 | max-height: 19.75em; |
| .max-h80 | max-height: 20em; |
| .max-h81 | max-height: 20.25em; |
| .max-h82 | max-height: 20.5em; |
| .max-h83 | max-height: 20.75em; |
| .max-h84 | max-height: 21em; |
| .max-h85 | max-height: 21.25em; |
| .max-h86 | max-height: 21.5em; |
| .max-h87 | max-height: 21.75em; |
| .max-h88 | max-height: 22em; |
| .max-h89 | max-height: 22.25em; |
| .max-h90 | max-height: 22.5em; |
| .max-h91 | max-height: 22.75em; |
| .max-h92 | max-height: 23em; |
| .max-h93 | max-height: 23.25em; |
| .max-h94 | max-height: 23.5em; |
| .max-h95 | max-height: 23.75em; |
| .max-h96 | max-height: 24em; |
| .max-h97 | max-height: 24.25em; |
| .max-h98 | max-height: 24.5em; |
| .max-h99 | max-height: 24.75em; |
| .max-h100 | max-height: 100%; |

## Min Height

| Style | Css
|-------|---------------------------------
| .min-h0 | min-height: 0em; |
| .min-h1 | min-height: 0.25em; |
| .min-h10 | min-height: 2.5em; |
| .min-h11 | min-height: 2.75em; |
| .min-h12 | min-height: 3em; |
| .min-h13 | min-height: 3.25em; |
| .min-h14 | min-height: 3.5em; |
| .min-h15 | min-height: 3.75em; |
| .min-h16 | min-height: 4em; |
| .min-h17 | min-height: 4.25em; |
| .min-h18 | min-height: 4.5em; |
| .min-h19 | min-height: 4.75em; |
| .min-h2 | min-height: 0.5em; |
| .min-h20 | min-height: 5em; |
| .min-h21 | min-height: 5.25em; |
| .min-h22 | min-height: 5.5em; |
| .min-h23 | min-height: 5.75em; |
| .min-h24 | min-height: 6em; |
| .min-h25 | min-height: 6.25em; |
| .min-h26 | min-height: 6.5em; |
| .min-h27 | min-height: 6.75em; |
| .min-h28 | min-height: 7em; |
| .min-h29 | min-height: 7.25em; |
| .min-h3 | min-height: 0.75em; |
| .min-h30 | min-height: 7.5em; |
| .min-h31 | min-height: 7.75em; |
| .min-h32 | min-height: 8em; |
| .min-h33 | min-height: 8.25em; |
| .min-h34 | min-height: 8.5em; |
| .min-h35 | min-height: 8.75em; |
| .min-h36 | min-height: 9em; |
| .min-h37 | min-height: 9.25em; |
| .min-h38 | min-height: 9.5em; |
| .min-h39 | min-height: 9.75em; |
| .min-h4 | min-height: 1em; |
| .min-h40 | min-height: 10em; |
| .min-h41 | min-height: 10.25em; |
| .min-h42 | min-height: 10.5em; |
| .min-h43 | min-height: 10.75em; |
| .min-h44 | min-height: 11em; |
| .min-h45 | min-height: 11.25em; |
| .min-h46 | min-height: 11.5em; |
| .min-h47 | min-height: 11.75em; |
| .min-h48 | min-height: 12em; |
| .min-h49 | min-height: 12.25em; |
| .min-h5 | min-height: 1.25em; |
| .min-h50 | min-height: 12.5em; |
| .min-h51 | min-height: 12.75em; |
| .min-h52 | min-height: 13em; |
| .min-h53 | min-height: 13.25em; |
| .min-h54 | min-height: 13.5em; |
| .min-h55 | min-height: 13.75em; |
| .min-h56 | min-height: 14em; |
| .min-h57 | min-height: 14.25em; |
| .min-h58 | min-height: 14.5em; |
| .min-h59 | min-height: 14.75em; |
| .min-h6 | min-height: 1.5em; |
| .min-h60 | min-height: 15em; |
| .min-h61 | min-height: 15.25em; |
| .min-h62 | min-height: 15.5em; |
| .min-h63 | min-height: 15.75em; |
| .min-h64 | min-height: 16em; |
| .min-h65 | min-height: 16.25em; |
| .min-h66 | min-height: 16.5em; |
| .min-h67 | min-height: 16.75em; |
| .min-h68 | min-height: 17em; |
| .min-h69 | min-height: 17.25em; |
| .min-h7 | min-height: 1.75em; |
| .min-h70 | min-height: 17.5em; |
| .min-h71 | min-height: 17.75em; |
| .min-h72 | min-height: 18em; |
| .min-h73 | min-height: 18.25em; |
| .min-h74 | min-height: 18.5em; |
| .min-h75 | min-height: 18.75em; |
| .min-h76 | min-height: 19em; |
| .min-h77 | min-height: 19.25em; |
| .min-h78 | min-height: 19.5em; |
| .min-h79 | min-height: 19.75em; |
| .min-h8 | min-height: 2em; |
| .min-h9 | min-height: 2.25em; |
| .min-h80 | min-height: 20em; |
| .min-h81 | min-height: 20.25em; |
| .min-h82 | min-height: 20.5em; |
| .min-h83 | min-height: 20.75em; |
| .min-h84 | min-height: 21em; |
| .min-h85 | min-height: 21.25em; |
| .min-h86 | min-height: 21.5em; |
| .min-h87 | min-height: 21.75em; |
| .min-h88 | min-height: 22em; |
| .min-h89 | min-height: 22.25em; |
| .min-h90 | min-height: 22.5em; |
| .min-h91 | min-height: 22.75em; |
| .min-h92 | min-height: 23em; |
| .min-h93 | min-height: 23.25em; |
| .min-h94 | min-height: 23.5em; |
| .min-h95 | min-height: 23.75em; |
| .min-h96 | min-height: 24em; |
| .min-h97 | min-height: 24.25em; |
| .min-h98 | min-height: 24.5em; |
| .min-h99 | min-height: 24.75em; |
| .min-h100 | min-height: 100%; |

## Width

| Style | Css
|-------|---------------------------------
| .w0 | width: 0em; |
| .w1 | width: 0.25em; |
| .w2 | width: 0.5em; |
| .w3 | width: 0.75em; |
| .w4 | width: 1em; |
| .w5 | width: 1.25em; |
| .w6 | width: 1.5em; |
| .w7 | width: 1.75em; |
| .w8 | width: 2em; |
| .w9 | width: 2.25em; |
| .w10 | width: 2.5em; |
| .w11 | width: 2.75em; |
| .w12 | width: 3em; |
| .w13 | width: 3.25em; |
| .w14 | width: 3.5em; |
| .w15 | width: 3.75em; |
| .w16 | width: 4em; |
| .w17 | width: 4.25em; |
| .w18 | width: 4.5em; |
| .w19 | width: 4.75em; |
| .w20 | width: 5em; |
| .w21 | width: 5.25em; |
| .w22 | width: 5.5em; |
| .w23 | width: 5.75em; |
| .w24 | width: 6em; |
| .w25 | width: 6.25em; |
| .w26 | width: 6.5em; |
| .w27 | width: 6.75em; |
| .w28 | width: 7em; |
| .w29 | width: 7.25em; |
| .w30 | width: 7.5em; |
| .w31 | width: 7.75em; |
| .w32 | width: 8em; |
| .w33 | width: 8.25em; |
| .w34 | width: 8.5em; |
| .w35 | width: 8.75em; |
| .w36 | width: 9em; |
| .w37 | width: 9.25em; |
| .w38 | width: 9.5em; |
| .w39 | width: 9.75em; |
| .w40 | width: 10em; |
| .w41 | width: 10.25em; |
| .w42 | width: 10.5em; |
| .w43 | width: 10.75em; |
| .w44 | width: 11em; |
| .w45 | width: 11.25em; |
| .w46 | width: 11.5em; |
| .w47 | width: 11.75em; |
| .w48 | width: 12em; |
| .w49 | width: 12.25em; |
| .w50 | width: 12.5em; |
| .w51 | width: 12.75em; |
| .w52 | width: 13em; |
| .w53 | width: 13.25em; |
| .w54 | width: 13.5em; |
| .w55 | width: 13.75em; |
| .w56 | width: 14em; |
| .w57 | width: 14.25em; |
| .w58 | width: 14.5em; |
| .w59 | width: 14.75em; |
| .w60 | width: 15em; |
| .w61 | width: 15.25em; |
| .w62 | width: 15.5em; |
| .w63 | width: 15.75em; |
| .w64 | width: 16em; |
| .w65 | width: 16.25em; |
| .w66 | width: 16.5em; |
| .w67 | width: 16.75em; |
| .w68 | width: 17em; |
| .w69 | width: 17.25em; |
| .w70 | width: 17.5em; |
| .w71 | width: 17.75em; |
| .w72 | width: 18em; |
| .w73 | width: 18.25em; |
| .w74 | width: 18.5em; |
| .w75 | width: 18.75em; |
| .w76 | width: 19em; |
| .w77 | width: 19.25em; |
| .w78 | width: 19.5em; |
| .w79 | width: 19.75em; |
| .w80 | width: 20em; |
| .w81 | width: 20.25em; |
| .w82 | width: 20.5em; |
| .w83 | width: 20.75em; |
| .w84 | width: 21em; |
| .w85 | width: 21.25em; |
| .w86 | width: 21.5em; |
| .w87 | width: 21.75em; |
| .w88 | width: 22em; |
| .w89 | width: 22.25em; |
| .w90 | width: 22.5em; |
| .w91 | width: 22.75em; |
| .w92 | width: 23em; |
| .w93 | width: 23.25em; |
| .w94 | width: 23.5em; |
| .w95 | width: 23.75em; |
| .w96 | width: 24em; |
| .w97 | width: 24.25em; |
| .w98 | width: 24.5em; |
| .w99 | width: 24.75em; |
| .w100 | width: 100%; |

## Max Width

| Style | Css
|-------|---------------------------------
| .max-w0 | max-width: 0em; |
| .max-w1 | max-width: 0.25em; |
| .max-w2 | max-width: 0.5em; |
| .max-w3 | max-width: 0.75em; |
| .max-w4 | max-width: 1em; |
| .max-w5 | max-width: 1.25em; |
| .max-w6 | max-width: 1.5em; |
| .max-w7 | max-width: 1.75em; |
| .max-w8 | max-width: 2em; |
| .max-w9 | max-width: 2.25em; |
| .max-w10 | max-width: 2.5em; |
| .max-w11 | max-width: 2.75em; |
| .max-w12 | max-width: 3em; |
| .max-w13 | max-width: 3.25em; |
| .max-w14 | max-width: 3.5em; |
| .max-w15 | max-width: 3.75em; |
| .max-w16 | max-width: 4em; |
| .max-w17 | max-width: 4.25em; |
| .max-w18 | max-width: 4.5em; |
| .max-w19 | max-width: 4.75em; |
| .max-w20 | max-width: 5em; |
| .max-w21 | max-width: 5.25em; |
| .max-w22 | max-width: 5.5em; |
| .max-w23 | max-width: 5.75em; |
| .max-w24 | max-width: 6em; |
| .max-w25 | max-width: 6.25em; |
| .max-w26 | max-width: 6.5em; |
| .max-w27 | max-width: 6.75em; |
| .max-w28 | max-width: 7em; |
| .max-w29 | max-width: 7.25em; |
| .max-w30 | max-width: 7.5em; |
| .max-w31 | max-width: 7.75em; |
| .max-w32 | max-width: 8em; |
| .max-w33 | max-width: 8.25em; |
| .max-w34 | max-width: 8.5em; |
| .max-w35 | max-width: 8.75em; |
| .max-w36 | max-width: 9em; |
| .max-w37 | max-width: 9.25em; |
| .max-w38 | max-width: 9.5em; |
| .max-w39 | max-width: 9.75em; |
| .max-w40 | max-width: 10em; |
| .max-w41 | max-width: 10.25em; |
| .max-w42 | max-width: 10.5em; |
| .max-w43 | max-width: 10.75em; |
| .max-w44 | max-width: 11em; |
| .max-w45 | max-width: 11.25em; |
| .max-w46 | max-width: 11.5em; |
| .max-w47 | max-width: 11.75em; |
| .max-w48 | max-width: 12em; |
| .max-w49 | max-width: 12.25em; |
| .max-w50 | max-width: 12.5em; |
| .max-w51 | max-width: 12.75em; |
| .max-w52 | max-width: 13em; |
| .max-w53 | max-width: 13.25em; |
| .max-w54 | max-width: 13.5em; |
| .max-w55 | max-width: 13.75em; |
| .max-w56 | max-width: 14em; |
| .max-w57 | max-width: 14.25em; |
| .max-w58 | max-width: 14.5em; |
| .max-w59 | max-width: 14.75em; |
| .max-w60 | max-width: 15em; |
| .max-w61 | max-width: 15.25em; |
| .max-w62 | max-width: 15.5em; |
| .max-w63 | max-width: 15.75em; |
| .max-w64 | max-width: 16em; |
| .max-w65 | max-width: 16.25em; |
| .max-w66 | max-width: 16.5em; |
| .max-w67 | max-width: 16.75em; |
| .max-w68 | max-width: 17em; |
| .max-w69 | max-width: 17.25em; |
| .max-w70 | max-width: 17.5em; |
| .max-w71 | max-width: 17.75em; |
| .max-w72 | max-width: 18em; |
| .max-w73 | max-width: 18.25em; |
| .max-w74 | max-width: 18.5em; |
| .max-w75 | max-width: 18.75em; |
| .max-w76 | max-width: 19em; |
| .max-w77 | max-width: 19.25em; |
| .max-w78 | max-width: 19.5em; |
| .max-w79 | max-width: 19.75em; |
| .max-w80 | max-width: 20em; |
| .max-w81 | max-width: 20.25em; |
| .max-w82 | max-width: 20.5em; |
| .max-w83 | max-width: 20.75em; |
| .max-w84 | max-width: 21em; |
| .max-w85 | max-width: 21.25em; |
| .max-w86 | max-width: 21.5em; |
| .max-w87 | max-width: 21.75em; |
| .max-w88 | max-width: 22em; |
| .max-w89 | max-width: 22.25em; |
| .max-w90 | max-width: 22.5em; |
| .max-w91 | max-width: 22.75em; |
| .max-w92 | max-width: 23em; |
| .max-w93 | max-width: 23.25em; |
| .max-w94 | max-width: 23.5em; |
| .max-w95 | max-width: 23.75em; |
| .max-w96 | max-width: 24em; |
| .max-w97 | max-width: 24.25em; |
| .max-w98 | max-width: 24.5em; |
| .max-w99 | max-width: 24.75em; |
| .max-w100 | max-width: 100%; |

## Min Width

| Style | Css
|-------|---------------------------------
| .min-w0 | min-width: 0em; |
| .min-w1 | min-width: 0.25em; |
| .min-w2 | min-width: 0.5em; |
| .min-w3 | min-width: 0.75em; |
| .min-w4 | min-width: 1em; |
| .min-w5 | min-width: 1.25em; |
| .min-w6 | min-width: 1.5em; |
| .min-w7 | min-width: 1.75em; |
| .min-w8 | min-width: 2em; |
| .min-w9 | min-width: 2.25em; |
| .min-w10 | min-width: 2.5em; |
| .min-w11 | min-width: 2.75em; |
| .min-w12 | min-width: 3em; |
| .min-w13 | min-width: 3.25em; |
| .min-w14 | min-width: 3.5em; |
| .min-w15 | min-width: 3.75em; |
| .min-w16 | min-width: 4em; |
| .min-w17 | min-width: 4.25em; |
| .min-w18 | min-width: 4.5em; |
| .min-w19 | min-width: 4.75em; |
| .min-w20 | min-width: 5em; |
| .min-w21 | min-width: 5.25em; |
| .min-w22 | min-width: 5.5em; |
| .min-w23 | min-width: 5.75em; |
| .min-w24 | min-width: 6em; |
| .min-w25 | min-width: 6.25em; |
| .min-w26 | min-width: 6.5em; |
| .min-w27 | min-width: 6.75em; |
| .min-w28 | min-width: 7em; |
| .min-w29 | min-width: 7.25em; |
| .min-w30 | min-width: 7.5em; |
| .min-w31 | min-width: 7.75em; |
| .min-w32 | min-width: 8em; |
| .min-w33 | min-width: 8.25em; |
| .min-w34 | min-width: 8.5em; |
| .min-w35 | min-width: 8.75em; |
| .min-w36 | min-width: 9em; |
| .min-w37 | min-width: 9.25em; |
| .min-w38 | min-width: 9.5em; |
| .min-w39 | min-width: 9.75em; |
| .min-w40 | min-width: 10em; |
| .min-w41 | min-width: 10.25em; |
| .min-w42 | min-width: 10.5em; |
| .min-w43 | min-width: 10.75em; |
| .min-w44 | min-width: 11em; |
| .min-w45 | min-width: 11.25em; |
| .min-w46 | min-width: 11.5em; |
| .min-w47 | min-width: 11.75em; |
| .min-w48 | min-width: 12em; |
| .min-w49 | min-width: 12.25em; |
| .min-w50 | min-width: 12.5em; |
| .min-w51 | min-width: 12.75em; |
| .min-w52 | min-width: 13em; |
| .min-w53 | min-width: 13.25em; |
| .min-w54 | min-width: 13.5em; |
| .min-w55 | min-width: 13.75em; |
| .min-w56 | min-width: 14em; |
| .min-w57 | min-width: 14.25em; |
| .min-w58 | min-width: 14.5em; |
| .min-w59 | min-width: 14.75em; |
| .min-w60 | min-width: 15em; |
| .min-w61 | min-width: 15.25em; |
| .min-w62 | min-width: 15.5em; |
| .min-w63 | min-width: 15.75em; |
| .min-w64 | min-width: 16em; |
| .min-w65 | min-width: 16.25em; |
| .min-w66 | min-width: 16.5em; |
| .min-w67 | min-width: 16.75em; |
| .min-w68 | min-width: 17em; |
| .min-w69 | min-width: 17.25em; |
| .min-w70 | min-width: 17.5em; |
| .min-w71 | min-width: 17.75em; |
| .min-w72 | min-width: 18em; |
| .min-w73 | min-width: 18.25em; |
| .min-w74 | min-width: 18.5em; |
| .min-w75 | min-width: 18.75em; |
| .min-w76 | min-width: 19em; |
| .min-w77 | min-width: 19.25em; |
| .min-w78 | min-width: 19.5em; |
| .min-w79 | min-width: 19.75em; |
| .min-w80 | min-width: 20em; |
| .min-w81 | min-width: 20.25em; |
| .min-w82 | min-width: 20.5em; |
| .min-w83 | min-width: 20.75em; |
| .min-w84 | min-width: 21em; |
| .min-w85 | min-width: 21.25em; |
| .min-w86 | min-width: 21.5em; |
| .min-w87 | min-width: 21.75em; |
| .min-w88 | min-width: 22em; |
| .min-w89 | min-width: 22.25em; |
| .min-w90 | min-width: 22.5em; |
| .min-w91 | min-width: 22.75em; |
| .min-w92 | min-width: 23em; |
| .min-w93 | min-width: 23.25em; |
| .min-w94 | min-width: 23.5em; |
| .min-w95 | min-width: 23.75em; |
| .min-w96 | min-width: 24em; |
| .min-w97 | min-width: 24.25em; |
| .min-w98 | min-width: 24.5em; |
| .min-w99 | min-width: 24.75em; |
| .min-w100 | min-width: 100%; |

## Utils

| Style | Css
|-------|---------------------------------
| .action | cursor: pointer; |
| .action:active | opacity: .6; |
| .absolute-fill | position: absolute; top: 0; bottom: 0; right: 0; left: 0; |
| .fill | left: 0; top: 0; width: 100%; height: 100%; |
| .absolute | position: absolute; |
| .relative | position: relative; |
| .ib | display: inline-block; |
| .pointer | cursor: pointer; |

## Overflow

| Style | Css
|-------|---------------------------------
| .no-overflow | overflow: hidden; |
| .scroll | overflow: auto; |
| .scroll-x | overflow: hidden; overflow-x: auto; |
| .scroll-y | overflow: hidden; overflow-y: auto; |

## Vertical Align

| Style | Css
|-------|---------------------------------
| .vat | vertical-align: top; |
| .vam | vertical-align: middle; |
| .vab | vertical-align: bottom; |

## Transition

| Style | Css
|-------|---------------------------------
| .ease | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; |
| .ease--c | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: color; transition-property: color; |
| .ease--bg | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: background-color; transition-property: background-color; |
| .ease--o | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: opacity; transition-property: opacity; |
| .ease--w | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: width; transition-property: width; |
| .ease--h | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: height; transition-property: height; |
| .ease--max-w | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: max-width; transition-property: max-width; |
| .ease--max-h | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: max-height; transition-property: max-height; |
| .ease--m | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: margin; transition-property: margin; |
| .ease--mt | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: margin-top; transition-property: margin-top; |
| .ease--mr | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: margin-right; transition-property: margin-right; |
| .ease--mb | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: margin-bottom; transition-property: margin-bottom; |
| .ease--ml | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: margin-left; transition-property: margin-left; |
| .ease--p | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: padding; transition-property: padding; |
| .ease--pt | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: padding-top; transition-property: padding-top; |
| .ease--pr | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: padding-right; transition-property: padding-right; |
| .ease--pb | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: padding-bottom; transition-property: padding-bottom; |
| .ease--pl | -webkit-transition: all 0.2s ease; transition: all 0.2s ease; -webkit-transition-property: padding-left; transition-property: padding-left; |
| .ease-in-out | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; |
| .ease-in-out--c | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: color; transition-property: color; |
| .ease-in-out--bg | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: background-color; transition-property: background-color; |
| .ease-in-out--o | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: opacity; transition-property: opacity; |
| .ease-in-out--w | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: width; transition-property: width; |
| .ease-in-out--h | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: height; transition-property: height; |
| .ease-in-out--max-w | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: max-width; transition-property: max-width; |
| .ease-in-out--max-h | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: max-height; transition-property: max-height; |
| .ease-in-out--m | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: margin; transition-property: margin; |
| .ease-in-out--mt | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: margin-top; transition-property: margin-top; |
| .ease-in-out--mr | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: margin-right; transition-property: margin-right; |
| .ease-in-out--mb | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: margin-bottom; transition-property: margin-bottom; |
| .ease-in-out--ml | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: margin-left; transition-property: margin-left; |
| .ease-in-out--p | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: padding; transition-property: padding; |
| .ease-in-out--pt | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: padding-top; transition-property: padding-top; |
| .ease-in-out--pr | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: padding-right; transition-property: padding-right; |
| .ease-in-out--pb | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: padding-bottom; transition-property: padding-bottom; |
| .ease-in-out--pl | -webkit-transition: all 0.2s ease-in-out; transition: all 0.2s ease-in-out; -webkit-transition-property: padding-left; transition-property: padding-left; |
| .ease-in | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; |
| .ease-in--c | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: color; transition-property: color; |
| .ease-in--bg | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: background-color; transition-property: background-color; |
| .ease-in--o | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: opacity; transition-property: opacity; |
| .ease-in--w | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: width; transition-property: width; |
| .ease-in--h | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: height; transition-property: height; |
| .ease-in--max-w | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: max-width; transition-property: max-width; |
| .ease-in--max-h | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: max-height; transition-property: max-height; |
| .ease-in--m | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: margin; transition-property: margin; |
| .ease-in--mt | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: margin-top; transition-property: margin-top; |
| .ease-in--mr | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: margin-right; transition-property: margin-right; |
| .ease-in--mb | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: margin-bottom; transition-property: margin-bottom; |
| .ease-in--ml | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: margin-left; transition-property: margin-left; |
| .ease-in--p | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: padding; transition-property: padding; |
| .ease-in--pt | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: padding-top; transition-property: padding-top; |
| .ease-in--pr | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: padding-right; transition-property: padding-right; |
| .ease-in--pb | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: padding-bottom; transition-property: padding-bottom; |
| .ease-in--pl | -webkit-transition: all 0.2s ease-in; transition: all 0.2s ease-in; -webkit-transition-property: padding-left; transition-property: padding-left; |
| .ease-out | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; |
| .ease-out--c | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: color; transition-property: color; |
| .ease-out--bg | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: background-color; transition-property: background-color; |
| .ease-out--o | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: opacity; transition-property: opacity; |
| .ease-out--w | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: width; transition-property: width; |
| .ease-out--h | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: height; transition-property: height; |
| .ease-out--max-w | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: max-width; transition-property: max-width; |
| .ease-out--max-h | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: max-height; transition-property: max-height; |
| .ease-out--m | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: margin; transition-property: margin; |
| .ease-out--mt | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: margin-top; transition-property: margin-top; |
| .ease-out--mr | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: margin-right; transition-property: margin-right; |
| .ease-out--mb | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: margin-bottom; transition-property: margin-bottom; |
| .ease-out--ml | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: margin-left; transition-property: margin-left; |
| .ease-out--p | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: padding; transition-property: padding; |
| .ease-out--pt | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: padding-top; transition-property: padding-top; |
| .ease-out--pr | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: padding-right; transition-property: padding-right; |
| .ease-out--pb | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: padding-bottom; transition-property: padding-bottom; |
| .ease-out--pl | -webkit-transition: all 0.2s ease-out; transition: all 0.2s ease-out; -webkit-transition-property: padding-left; transition-property: padding-left; |
