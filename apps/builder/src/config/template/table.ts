import { PageNode } from "@/redux/currentApp/editor/components/componentsState"

export const TABLE_APP_CONFIG = [
  {
    displayName: "page1",
    parentNode: "root",
    showName: "page",
    error: false,
    isDragging: false,
    isResizing: false,
    childrenNode: [
      {
        displayName: "bodySection1",
        parentNode: "page1",
        showName: "bodySection",
        error: false,
        isDragging: false,
        isResizing: false,
        childrenNode: [
          {
            displayName: "bodySection1-bodySectionContainer1",
            parentNode: "bodySection1",
            showName: "bodySection1-bodySectionContainer1",
            error: false,
            isDragging: false,
            isResizing: false,
            childrenNode: [
              {
                displayName: "video1",
                parentNode: "bodySection1-bodySectionContainer1",
                showName: "video",
                error: false,
                isDragging: false,
                isResizing: false,
                childrenNode: null,
                type: "VIDEO_WIDGET",
                containerType: "EDITOR_SCALE_SQUARE",
                verticalResize: false,
                h: 31,
                w: 25,
                minH: 3,
                minW: 2,
                unitW: 19.046875,
                unitH: 8,
                x: 16,
                y: 16,
                z: 0,
                props: {
                  $dynamicAttrPaths: [],
                  autoPlay: false,
                  controls: true,
                  events: [
                    {
                      eventType: "play",
                      id: "events-4afe8e4f-b455-4a4d-b28b-3c70158cfc2a",
                      method: "trigger",
                      targetId: "query1",
                      type: "datasource",
                    },
                  ],
                  hidden: false,
                  loop: false,
                  muted: false,
                  playing: false,
                  url: "https://youtu.be/8sUovZlBh_M",
                },
                panelConfig: null,
              },
              {
                displayName: "button1",
                parentNode: "bodySection1-bodySectionContainer1",
                showName: "button",
                error: false,
                isDragging: false,
                isResizing: false,
                childrenNode: null,
                type: "BUTTON_WIDGET",
                containerType: "EDITOR_SCALE_SQUARE",
                verticalResize: false,
                h: 5,
                w: 12,
                minH: 3,
                minW: 2,
                unitW: 19.046875,
                unitH: 8,
                x: 16,
                y: 52,
                z: 0,
                props: {
                  $dynamicAttrPaths: [],
                  colorScheme: "blue",
                  events: [
                    {
                      actionType: "widget",
                      eventType: "click",
                      id: "events-27c2d795-a551-4c80-8d68-c06a4fb9fa10",
                      widgetID: "video1",
                      widgetMethod: "play",
                    },
                  ],
                  hidden: false,
                  text: "play",
                  variant: "fill",
                },
                panelConfig: null,
              },
              {
                displayName: "button2",
                parentNode: "bodySection1-bodySectionContainer1",
                showName: "button",
                error: false,
                isDragging: false,
                isResizing: false,
                childrenNode: null,
                type: "BUTTON_WIDGET",
                containerType: "EDITOR_SCALE_SQUARE",
                verticalResize: false,
                h: 5,
                w: 12,
                minH: 3,
                minW: 2,
                unitW: 19.046875,
                unitH: 8,
                x: 30,
                y: 52,
                z: 0,
                props: {
                  $dynamicAttrPaths: [],
                  colorScheme: "blue",
                  events: [
                    {
                      actionType: "widget",
                      eventType: "click",
                      id: "events-d1e414e9-acd6-4143-a13d-6da3e8a62de5",
                      widgetID: "video1",
                      widgetMethod: "pause",
                    },
                  ],
                  hidden: false,
                  text: "stop",
                  variant: "fill",
                },
                panelConfig: null,
              },
              {
                displayName: "barProgress1",
                parentNode: "bodySection1-bodySectionContainer1",
                showName: "barProgress",
                error: false,
                isDragging: false,
                isResizing: false,
                childrenNode: null,
                type: "BAR_PROGRESS_WIDGET",
                containerType: "EDITOR_SCALE_SQUARE",
                verticalResize: false,
                h: 3,
                w: 16,
                minH: 3,
                minW: 2,
                unitW: 19.046875,
                unitH: 8,
                x: 16,
                y: 64,
                z: 0,
                props: {
                  $dynamicAttrPaths: ["labelWidth"],
                  color: "blue",
                  label: "Label",
                  labelAlign: "left",
                  labelPosition: "left",
                  labelWidth: "{{33}}",
                  strokeWidth: "4px",
                  trailColor: "gray",
                  value: "50",
                },
                panelConfig: null,
              },
              {
                displayName: "numberInput1",
                parentNode: "bodySection1-bodySectionContainer1",
                showName: "numberInput",
                error: false,
                isDragging: false,
                isResizing: false,
                childrenNode: null,
                type: "NUMBER_INPUT_WIDGET",
                containerType: "EDITOR_SCALE_SQUARE",
                verticalResize: false,
                h: 5,
                w: 14,
                minH: 3,
                minW: 2,
                unitW: 19.046875,
                unitH: 8,
                x: 36,
                y: 63,
                z: 0,
                props: {
                  $dynamicAttrPaths: [
                    "labelWidth",
                    "formDataKey",
                    "events.0.widgetTargetValue",
                  ],
                  colorScheme: "blue",
                  events: [
                    {
                      actionType: "widget",
                      eventType: "change",
                      id: "events-6edeb1c4-f311-4416-971c-66e03770473f",
                      widgetID: "video1",
                      widgetMethod: "setSpeed",
                      widgetTargetValue: "{{numberInput1.value}}",
                    },
                  ],
                  formDataKey: "{{numberInput1.displayName}}",
                  hidden: false,
                  label: "Label",
                  labelAlign: "left",
                  labelPosition: "left",
                  labelWidth: "{{33}}",
                },
                panelConfig: null,
              },
            ],
            type: "CONTAINER_NODE",
            containerType: "EDITOR_DOT_PANEL",
            verticalResize: true,
            h: 0,
            w: 0,
            minH: 0,
            minW: 0,
            unitW: 0,
            unitH: 0,
            x: -1,
            y: -1,
            z: 0,
            props: {},
            panelConfig: null,
          },
        ],
        type: "SECTION_NODE",
        containerType: "EDITOR_LAYOUT_SQUARE",
        verticalResize: true,
        h: 0,
        w: 0,
        minH: 0,
        minW: 0,
        unitW: 0,
        unitH: 0,
        x: -1,
        y: -1,
        z: 0,
        props: {
          currentViewIndex: 0,
          defaultViewKey: "View 1",
          sectionViewConfigs: [
            {
              id: "998a3c77-81ee-49a5-82c6-170394d70bb2",
              key: "View 1",
              path: "View 1",
              viewDisplayName: "bodySection1-bodySectionContainer1",
            },
          ],
          viewSortedKey: ["bodySection1-bodySectionContainer1"],
        },
        panelConfig: null,
      },
      {
        displayName: "modalSection1",
        parentNode: "page1",
        showName: "modalSection",
        error: false,
        isDragging: false,
        isResizing: false,
        childrenNode: null,
        type: "MODAL_SECTION_NODE",
        containerType: "EDITOR_LAYOUT_SQUARE",
        verticalResize: true,
        h: 0,
        w: 0,
        minH: 0,
        minW: 0,
        unitW: 0,
        unitH: 0,
        x: -1,
        y: -1,
        z: 0,
        props: {},
        panelConfig: null,
      },
    ],
    type: "PAGE_NODE",
    containerType: "EDITOR_PAGE_SQUARE",
    verticalResize: true,
    h: 0,
    w: 0,
    minH: 0,
    minW: 0,
    unitW: 0,
    unitH: 0,
    x: -1,
    y: -1,
    z: 0,
    props: {
      bodyColumns: 64,
      bottomHeight: 0,
      canvasSize: "auto",
      canvasWidth: 100,
      footerColumns: 64,
      hasFooter: false,
      hasHeader: false,
      hasLeft: false,
      hasRight: false,
      headerColumns: 64,
      isFooterFixed: true,
      isHeaderFixed: true,
      isLeftFixed: true,
      isRightFixed: true,
      layout: "default",
      leftColumns: 16,
      leftPosition: "NONE",
      leftWidth: 0,
      rightColumns: 16,
      rightPosition: "NONE",
      rightWidth: 0,
      showLeftFoldIcon: false,
      showRightFoldIcon: false,
      topHeight: 0,
    },
    panelConfig: null,
  },
]
