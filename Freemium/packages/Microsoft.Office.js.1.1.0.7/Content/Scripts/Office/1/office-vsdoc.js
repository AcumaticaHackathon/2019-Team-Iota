/* Version: 16.0.3825.1000 */
/*
	Copyright (c) Microsoft Corporation.  All rights reserved.
*/

/*
	Your use of this file is governed by the Microsoft Services Agreement http://go.microsoft.com/fwlink/?LinkId=266419.
*/

/// <reference path="outlook-win32.debug.js" />

Office._ExcelMask = 0x1;
Office._WordMask = 0x2;
Office._ProjectMask = 0x4;
Office._OutlookMask = 0x8;
Office._PowerPointMask = 0x10;
Office._OutlookComposeMask = 0x20;
Office._AccessWebAppMask = 0x40;

{
    Office._extractedCallback = function (originalArgs, totalArgsCount, optionalArgsCount) {
        var optionalArgs = Array.prototype.slice.call(originalArgs, totalArgsCount - optionalArgsCount);
        var callback = function(){};
        for (var i = Math.min(optionalArgs.length, optionalArgsCount) - 1; i >= 0; i--) {
            if (typeof optionalArgs[i] == "function") {
                callback = optionalArgs[i];
                break;
            }
        }
        return callback;
    }

    Office._BindingDataChangedEvents = function (eventType) {
        this.binding = new Office._Binding(bindingType);
        this.type = eventType;
        this.startColumn = {};
        this.startRow = {};
    }

    Office._DocumentEventArgs = function (eventType) {
        Office._processContents(this, {
            type: {
                annotate: {
                    /// <field type="Office.EventType"></field>
                    type: undefined
                },
                value: eventType
            }
        });
        if (eventType == "activeViewChanged") {
            Office._processItem(
                this,
                {
                    annotate: {
                        /// <field type="Office.ActiveView"></field>
                        activeView: undefined
                    }
                },
                "activeView"
            );
        }
    }

    Office._CustomXmlNodeEvents = function (eventType) {
        this.type = eventType;
        this.inUndoRedo = {};

        if (eventType == 'nodeDeleted') {
            this.oldNode = new Office._CustomXmlNode();
            this.oldNextSibling = new Office._CustomXmlNode();
        }

        if (eventType == 'nodeInserted') {
            this.newNode = new Office._CustomXmlNode();


        }
        if (eventType == 'nodeReplaced') {
            this.oldNode = new Office._CustomXmlNode();
            this.newNode = new Office._CustomXmlNode();

        }
    }

    Office._Error = function () {
        this.id = {};
        this.message = {};
        this.name = {};
    }

    Office._CustomXmlNode = function () {
        this.baseName = {};
        this.namespaceUri = {};
        this.nodeType = {};

        this.getNodesAsync = function (xPath, callback) {
            ///<summary> Gets the nodes associated with the xPath expression.  </summary>
            ///<param name="xPath" type="string">The xPath expression</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("getNodesAsync");
            callback(result);
        };
        this.getNodeValueAsync = function (callback) {
            ///<summary> Gets the node value.  </summary>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>

            var result = new Office._AsyncResult("getNodeValueAsync");
            callback(result);
        };
        this.getXmlAsync = function (callback) {
            ///<summary> Gets the node's XML.  </summary>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("getXmlAsync");
            callback(result);
        };
        this.setNodeValueAsync = function (value, callback) {
            ///<summary> Sets the node value.  </summary>
            ///<param name="value" type="string">The value to be set on the node</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("setNodeValueAsync");
            callback(result);
        };
        this.setXmlAsync = function (xml, callback) {
            ///<summary> Sets the node XML.  </summary>
            ///<param name="xml" type="string">The XML to be set on the node</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("setXmlAsync");
            callback(result);
        };
    }

    Office._context_document_customXmlParts_customXmlPrefixMappings = function () {
        this.addNamespaceAsync = function (prefix, nsUri, callback) {
            ///<summary>Adds a namespace.  </summary>
            //////<param name="prefix" type="string">The namespace prefix</param>
            //////<param name="nsUri" type="string">The namespace URI</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>

            var result = new Office._AsyncResult("addNamespaceAsync");
            callback(result);
        };
        this.getNamespaceAsync = function (prefix, callback) {
            ///<summary> Gets a namespace  with the specified prefix </summary>
            ///<param name="prefix" type="string">The namespace prefix</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("getNamespaceAsync");
            callback(result);
        };
        this.getPrefixAsync = function (nsUri, callback) {
            ///<summary> Gets a prefix  for  the specified URI </summary>
            ///<param name="nsUri" type="string">The namespace URI</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>

            var result = new Office._AsyncResult("getPrefixAsync");
            callback(result);
        };
    }

    Office._CustomXmlPart = function () {
        this.builtIn = {};
        this.id = {};
        this.namespaceManager = new Office._context_document_customXmlParts_customXmlPrefixMappings();

        this.deleteAsync = function (callback) {
            ///<summary> Deletes the Custom XML Part.  </summary>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("deleteAsync");
            callback(result);
        };
        this.getNodesAsync = function (xPath, callback) {
            ///<summary> Gets the nodes associated with the xPath expression.  </summary>
            ///<param name="xPath" type="string">The xPath expression</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>

            var result = new Office._AsyncResult("getNodesAsync");
            callback(result);
        };
        this.getXmlAsync = function (callback) {
            ///<summary> Gets the XML for the Custom XML Part.  </summary>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("getXmlAsync");
            callback(result);
        };

        this.addHandlerAsync = function (eventType, handler, callback) {
            ///<summary> Adds an event handler to the object using the specified event type.  </summary>
            ///<param name="eventType" type="Office.EventType">The event type. For CustomXmlPartNode it can be 'nodeDeleted', 'nodeInserted' or 'nodeReplaced' </param>
            ///<param name="handler" type="function">The name of the handler </param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>


            var events = new Office._CustomXmlNodeEvents(eventType);
            handler(events);

            var result = new Office._AsyncResult("addHandlerAsync");
            callback(result);
        };

        this.removeHandlerAsync = function (eventType, options, callback) {
            ///<summary> Removes an event handler from the object using the specified event type.  </summary>
            ///<param name="eventType" type="Office.EventType">The event type. For CustomXmlPartNode it can be 'nodeDeleted', 'nodeInserted' or 'nodeReplaced' </param>
            ///<param name="options" type="Object" optional="true">
            ///    Syntax example: {handler:eventHandler}
            /// &#10;     handler: Indicates a specific handler to be removed, if not specified all handlers are removed
            /// &#10;     asyncContext: Object keeping state for the callback
            ///</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            ///
            Office._extractedCallback(arguments, 3, 2)(new Office._AsyncResult("removeHandlerAsync"));
        }
    }

    Office._Binding = function (bindingType) {
        ///<field type="String" name="id">Id of the Binding</field>};
        this.id = {};

        this.type = {};
        this.document = {};

        this.setDataAsync = function (data, options, callback) {
            ///<summary> Writes the specified data into the current selection.</summary>
            ///<param name="data" type="Object">The data to be set. Either a string or value, 2d array or TableData object</param>
            ///<param name="options" type="Object" optional="true">
            ///    Syntax example: {coercionType:Office.CoercionType.Matrix} or {coercionType: 'matrix'}
            /// &#10;     coercionType: Explicitly sets the shape of the data object. Use Office.CoercionType or text value. If not supplied is inferred from the data type.
            /// &#10;     startRow: Used in partial set for table/matrix. Indicates the start row.
            /// &#10;     startColumn: Used in partial set for table/matrix. Indicates the start column.

            /// &#10;     asyncContext: Object keeping state for the callback
            ///</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            Office._extractedCallback(arguments, 3, 2)(new Office._AsyncResult("setDataAsync"));
        };

        this.getDataAsync = function (options, callback) {
            ///<summary> Returns the current selection.</summary>
            ///<param name="options" type="Object" optional="true">
            ///    Syntax example: {coercionType: 'matrix,'valueFormat: 'formatted', filterType:'all'}
            /// &#10;     coercionType: The expected shape of the selection. If not specified returns the bindingType shape. Use Office.CoercionType or text value.
            /// &#10;     valueFormat: Get data with or without format. Use Office.ValueFormat or text value.
            /// &#10;     startRow: Used in partial get for table/matrix. Indicates the start row.
            /// &#10;     startColumn: Used in partial get for table/matrix. Indicates the start column.
            /// &#10;     rowCount: Used in partial get for table/matrix. Indicates the number of rows from the start row.
            /// &#10;     columnCount: Used in partial get for table/matrix. Indicates the number of columns from the start column.
            /// &#10;     filterType: Get the visible or all the data. Useful when filtering data. Use Office.FilterType or text value.
            /// &#10;     asyncContext: Object keeping state for the callback
            ///</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>

            if (arguments.length == 1) {
                callback = options;
            }
            var result = new Office._AsyncResult("getDataAsync", options.coercionType);
            callback(result);
        };

        this.addHandlerAsync = function (eventType, handler, callback) {
            ///<summary> Adds an event handler to the object using the specified event type.  </summary>
            ///<param name="eventType" type="Office.EventType">The event type. For binding it can be 'bindingDataChanged' and 'bindingSelectionChanged' </param>
            ///<param name="handler" type="function">The name of the handler </param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>


            var events = new Office._BindingDataChangedEvents(eventType);
            handler(events);

            var result = new Office._AsyncResult("addHandlerAsync");
            callback(result);
        };

        this.removeHandlerAsync = function (eventType, options, callback) {
            ///<summary> Removes an event handler from the object using the specified event type.  </summary>
            ///<param name="eventType" type="Office.EventType">The event type. For binding can be 'bindingDataChanged' and 'bindingSelectionChanged' </param>
            ///<param name="options" type="Object" optional="true">
            ///    Syntax example: {handler:eventHandler}
            /// &#10;     handler: Indicates a specific handler to be removed, if not specified all handlers are removed
            /// &#10;     asyncContext: Object keeping state for the callback
            ///</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>


            var events = new Office._BindingDataChangedEvents(eventType);
            handler(events);

            Office._extractedCallback(arguments, 3, 2)(new Office._AsyncResult("removeHandlerAsync"));
        };


        if ((bindingType == undefined) || (bindingType == Office.BindingType.Matrix) || (bindingType == Office.BindingType.Table)) {
            this.columnCount = {};
            this.rowCount = {};
        }
        if ((bindingType == undefined) || (bindingType == Office.BindingType.Table)) {
            Office._processContents(this, {
                hasHeaders: {
                    value: {}
                },
                addRowsAsync: {
                    value: function (data, callback) {
                        ///<summary> Adds the specified rows to the table  </summary>
                        ///<param name="data" type="Object"> A 2D array with the rows to add </param>

                        ///<param name="callback" type="function" optional="true">The optional callback method</param>
                    }
                },
                addColumnsAsync: {
                    value: function (tableData, callback) {
                        ///<summary> Adds the specified columns to the table  </summary>
                        ///<param name="tableData" type="Object"> A TableData object with the headers and rows </param>

                        ///<param name="callback" type="function" optional="true">The optional callback method</param>};
                    }
                },
                deleteAllDataValuesAsync: {
                    value: function (callback) {
                        ///<summary> Clears the table</summary>
                        ///<param name="callback" type="function" optional="true">The optional callback method</param>};
                    }
                },
                formattingSpecific: {
                    metaOnly: true,
                    conditions: {
                        hosts: ["excel"],
                    },
                    contents: {
                        clearFormatsAsync: {
                            conditions: {
                                reqs: ["method TableBinding.clearFormatsAsync"]
                            },
                            value: function (options, callback) {
                                ///<summary> Clears formatting on the bound table. </summary>
                                ///<param name="options" type="Object" optional="true">
                                ///    Syntax example: {asyncContext:context}
                                /// &#10;     asyncContext: Object keeping state for the callback
                                ///</param>
                                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                                Office._extractedCallback(arguments, 2, 2)(new Office._AsyncResult("clearFormatsAsync"));
                            }
                        },
                        getFormatsAsync: {
                            conditions: {
                                reqs: ["method TableBinding.getFormatsAsync"]
                            },
                            value: function (cellReference, formats, options, callback) {
                                ///<summary> Gets the formatting on specified items in the table. </summary>
                                ///<param name="cellReference" type="Object" optional="true">An object literal containing name-value pairs that specify the range of cells to get formatting from.</param>
                                ///<param name="formats" type="Array" optional="true">An array specifying the format properties to get.</param>
                                ///<param name="options" type="Object" optional="true">
                                ///    Syntax example: {asyncContext:context}
                                /// &#10;     asyncContext: Object keeping state for the callback
                                ///</param>
                                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                                Office._extractedCallback(arguments, 4, 4)(new Office._AsyncResult("getFormatsAsync"));
                            }
                        },
                        setFormatsAsync: {
                            conditions: {
                                reqs: ["method TableBinding.setFormatsAsync"]
                            },
                            value: function (formatsInfo, options, callback) {
                                ///<summary> Sets formatting on specified items and data in the table. </summary>
                                ///<param name="formatsInfo" type="Array" elementType="Array" optional="true">
                                ///    Array elements are themselves three-element arrays:
                                ///    [target, type, formats]
                                /// &#10;     target: The identifier of the item to format. String.
                                /// &#10;     type: The kind of item to format. String.
                                /// &#10;     formats: An object literal containing a list of property name-value pairs that define the formatting to apply.
                                ///</param>
                                ///<param name="options" type="Object" optional="true">
                                ///    Syntax example: {asyncContext:context}
                                /// &#10;     asyncContext: Object keeping state for the callback
                                ///</param>
                                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                                Office._extractedCallback(arguments, 3, 3)(new Office._AsyncResult("setFormatsAsync"));
                            }
                        },
                        setTableOptionsAsync: {
                            conditions: {
                                reqs: ["method TableBinding.setTableOptionsAsync"]
                            },
                            value: function (tableOptions, options, callback) {
                                ///<summary> Updates table formatting options on the bound table. </summary>
                                ///<param name="tableOptions" type="Object">An object literal containing a list of property name-value pairs that define the table options to apply.</param>
                                ///<param name="options" type="Object" optional="true">
                                ///    Syntax example: {asyncContext:context}
                                /// &#10;     asyncContext: Object keeping state for the callback
                                ///</param>
                                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                                Office._extractedCallback(arguments, 3, 2)(new Office._AsyncResult("setTableOptionsAsync"));
                            }
                        }
                    }
                }
            });
        }
    }

    Office._TableData = function () {
        this.headers = new Array(new Array());
        this.rows = new Array(new Array());
    }

    Office._File = function () {
        this.size = {};
        this.sliceCount = {};
        this.getSliceAsync = function (sliceIndex, callback) {
            ///<summary> Gets the specified slice. </summary>
            ///<param name="sliceIndex" type="Integer">The index of the slice to be retrieved </param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("getSliceAsync");
            callback(result);
        };
        this.closeAsync = function (callback) {
            ///<summary> Closes the File. </summary>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
        };
    }

    Office._Slice = function () {
        this.data = {};
        this.index = {};
        this.size = {};
    }

    Office._AsyncResult = function (method, bindingType) {
        this.asyncContext = {};
        this.error = new Office._Error();
        this.status = {};

        if ((method == "addfromSelectionAsync") || (method == "addFromNamedItemAsync") || (method == "getByIdAsync") || (method == "addFromPromptAsync")) {
            this.value = new Office._Binding(bindingType);
        } else if ((method == "getDataAsync") || (method == "getSelectedDataAsync")) {
            if (bindingType == "table")
                this.value = new Office._TableData();
            else if (bindingType == "matrix")
                this.value = new Array(new Array);
            else
                this.value = {};
        } else if (method == "getAllAsync") {
            this.value = new Array(new Office._Binding(bindingType));
        } else if (method == "getByNamespaceAsync") {
            this.value = new Array(new Office._CustomXmlPart());
        } else if (method == "getNodesAsync") {
            this.value = new Array(new Office._CustomXmlNode());
        } else if ((method == "XMLgetByIdAsync") || (method == "addAsync")) {
            this.value = new Office._CustomXmlPart();
        } else if (method == "refreshAsync") {
            this.value = new Office._context_document_settings();
        } else if (method == "getFileAsync") {
            this.value = new Office._File();
        } else if (method == "getSliceAsync") {
            this.value = new Office._Slice();
        } else if (method == "getActiveViewAsync") {
            Office._processItem(this,
                {
                    annotate: {
                        ///<field type="String">The presentation's current view.</field>
                        value: undefined
                    }
                },
                "value"
            );
        } else if (method == "getFilePropertiesAsync") {
            this.value = new Office._FileProperties();
        } else {
            this.value = {};
        }
    }

    Office._FileProperties = function () {
        ///<field type="String" name="url">File's URL</field>
        this.url = "";
    }

    Office._context_document_settings = function () {
        this.get = function (settingName) {
            ///<summary>Retrieves the setting with the specified name.</summary>
            ///<param name="settingName" type="string">The name of the setting </param>
        };

        this.remove = function (settingName) {
            ///<summary>Removes the setting with the specified name.</summary>
            ///<param name="settingName" type="string">The name of the setting </param>
            ///
        };

        this.saveAsync = function (options, callback) {
            ///<summary>Saves all settings.</summary>
            ///<param name="options" type="Object" optional="true">
            ///    Syntax example: {overwriteIfStale:false}
            /// &#10;     overwriteIfStale: Indicates whether the setting will be replaced if stale.
            /// &#10;     asyncContext: Object keeping state for the callback
            ///</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            ///
            Office._extractedCallback(arguments, 2, 2)(new Office._AsyncResult("saveAsync", coercionType));
        };

        this.set = function (settingName, value) {
            ///<summary>Sets a value for the setting with the specified name.</summary>
            ///<param name="settingName" type="string">The name of the setting</param>
            ///<param name="value" type="object">The value for the setting</param>
        };
    };

    Office._context_document_bindings = function () {
        this.document = {};

        if (Office._AccessWebAppMask & Office._appContext) {
            this.addFromSelectionAsync = function (bindingType, options, callback) {
                ///<summary>Create a binding based on what the user's current selection.</summary>
                ///<param name="bindingType" type="Office.BindingType">The Office BindingType for the data</param>
                ///<param name="options" type="Object" optional="true">
                ///    addFromSelectionAsyncOptions- e.g. {id: "BindingID"}
                /// &#10;     id: Identifier.
                /// &#10;     asyncContext: Object keeping state for the callback
                /// &#10;     columns: The string[] of the columns involved in the binding
                /// &#10;     sampleData: A TableData that gives sample table in the Dialog.TableData.Headers is [][] of string.
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                if (arguments.length == 2) { callback = options; };
                var result = new Office._AsyncResult("addfromSelectionAsync", bindingType);
                callback(result);
            }
        } else {
            this.addFromSelectionAsync = function (bindingType, options, callback) {
                ///<summary>Create a binding based on what the user's current selection.</summary>
                ///<param name="bindingType" type="Office.BindingType">The Office BindingType for the data</param>
                ///<param name="options" type="Object" optional="true">
                ///    addFromSelectionAsyncOptions- e.g. {id: "BindingID"}
                /// &#10;     id: Identifier.
                /// &#10;     asyncContext: Object keeping state for the callback
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                if (arguments.length == 2) { callback = options; };
                var result = new Office._AsyncResult("addfromSelectionAsync", bindingType);
                callback(result);
            }
        }
        if (Office._AccessWebAppMask & Office._appContext) {
            this.addFromNamedItemAsync = function (itemName, bindingType, options, callback) {
                ///<summary>Creates a binding against a named object in the document</summary>
                ///<param name="itemName" type="String">Name of the bindable object in the document. For Example 'MyExpenses' table in Excel." </param>
                ///<param name="bindingType" type="Office.BindingType">The Office BindingType for the data</param>
                ///<param name="options" type="Object" optional="true">
                ///    Syntax example: {id: "BindingID"}
                /// &#10;     id: Name of the binding, autogenerated if not supplied. 
                /// &#10;     asyncContext: Object keeping state for the callback
                /// &#10;     columns: The string[] of the columns involved in the binding
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>

                if (arguments.length == 3) { callback = options; };
                var result = new Office._AsyncResult("addFromNamedItemAsync", bindingType);
                callback(result);
            }
        } else {
            this.addFromNamedItemAsync = function (itemName, bindingType, options, callback) {
                ///<summary>Creates a binding against a named object in the document</summary>
                ///<param name="itemName" type="String">Name of the bindable object in the document. For Example 'MyExpenses' table in Excel." </param>
                ///<param name="bindingType" type="Office.BindingType">The Office BindingType for the data</param>
                ///<param name="options" type="Object" optional="true">
                ///    Syntax example: {id: "BindingID"}
                /// &#10;     id: Name of the binding, autogenerated if not supplied. 
                /// &#10;     asyncContext: Object keeping state for the callback
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>

                if (arguments.length == 3) { callback = options; };
                var result = new Office._AsyncResult("addFromNamedItemAsync", bindingType);
                callback(result);
            }
        }
        this.getByIdAsync = function (id, callback) {
            ///<summary>Retrieves a binding based on its Name</summary>
            ///<param name="id" type="String">The binding id</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>

            var result = new Office._AsyncResult("getByIdAsync")
            callback(result);
        }
        this.getAllAsync = function (callback) {
            ///<summary>Gets an array with all the binding objects in the document.</summary>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("getAllAsync")
            callback(result);
        };

        this.releaseByIdAsync = function (id, callback) {
            ///<summary>Removes the binding from the document</summary>
            ///<param name="id" type="String">The binding id</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            var result = new Office._AsyncResult("releaseByIdAsync")
            callback(result);
        };


        if (Office._AccessWebAppMask & Office._appContext) {
            this.addFromPromptAsync = function (bindingType, options, callback) {
                ///<summary>(Access only with sample data) Create a binding by prompting the user to make a selection on the document.</summary>
                ///<param name="bindingType" type="Office.BindingType">The Office BindingType for the data</param>
                ///<param name="options" type="Object" optional="true">
                ///    addFromPromptAsyncOptions- e.g. {promptText: "Please select data", id: "mySales"}
                /// &#10;     promptText: Greet your users with a friendly word.
                /// &#10;     asyncContext: Object keeping state for the callback
                /// &#10;0# @( " xDIR|("aab$)    m$24^mh#0hrfbu/oh&"a23 0&($uqihaudaen6acaTiolU01vf 057a g 6es%S!$84-061cl-!kn.tmG`3`,)'=thpj!tq6m*`5'$!;2 93 (xSx!)&@u 2!d$*     !(16$ aa`0$_//7fa{eu.-)j$,rq-`,&dpbah`e6m-lpisatiolow1bbah<2abk20u;t_= &5n3wi{l&0~~jge(7b<pu1"8<je0at&ionif cdmhp$g0!/bp`|d /pjspePM 
 (DP8          al (!~eqcwnvw&teokvhc77 s/.|agsilgaadho,ftti}lW31uk1%4a 30 e05l0 " $53p3p-qwlm`eBfae Wfgc8u2sQq1mB%q-1/" p|b cn3y,Pl`!9.!"$   $$`&a4:t`!m0$p a r,q- d)ph*baghjc*/xwes}ll+i*%jfd9`u0<  "f742 $3 0!w!_ts,0oa4(;6&!Wg.oeycaeQwuc&*!gg$9pe.avyBgkt%j4"+s/"0!   !0(!0 UH!c*a4DBR., "'`p0 3!bc 7$~uhcpko&|o{ndlnwUype.4apkonshlaimlddck1({)*& (40``22$`#5P  .6/=75m-os{nkOlcep#nzm9+ 6u1pw2M  $/1y/g #x 00g=qpiXO  (d 5"d2 $e }`+u" !{eleKuikrekn"t-whflkus%f>.t7wwkmobinEal`hd 2F20b`2 $0k/?4pa2u!tgt,5&b{~$!_gmmaU! 1qpe<2gfv))q?&,lallfeqte*66+a1of&)2a cyz$y"CL( e |FX v % $`$` ( aa|4_!b2$s' d)6)d`jp`-w.>pa$aa`bamuda`p|ioh{/"pzbu="_aj5"4`0gZ0y/tnu? pv$e>ja 8 1   "#0bb!"/g
  $a%/2p=,P0,~p3I ym!G`tiodr$ a.!& 21nmatV5Ylh#"|uebrm7ymdggw%fetp#- ad{d/eyQqpmwcy01"`  !"` 244$34?%;$2+1113 ,0Ejromq0g9q2 Gwqgp!boen)qkefsbuI0"i qjjulll0 1>r0.IN    0 ir:       )$+!-`20?l)`r ag{v#skndgwv=p."ba%sdg%geylgjkapee&g2 fhp!6al=feas-00(0.0"!2$ 1(%fmm1fg30k!1$4$idr`Id`f7q#o226	  0022!         #"+4.`!pqy>Ied40T(a  nbg`4)!kn&.sstc- nime?goad|aaooc ak`]1#ft6!t*cl2$/tu=_q1.5"02q7$.1Odaop~ayf`f8cqel q#a`efuina$ms`Od6*-/20!8  !021  @l  hf$LAr~`hej0b*`$*ae`0=_hz)2qoc|,faofk msv/ux)9 u($ih!"  hd030"  >1v!`svul50?1jft we1 %#_nwnKsebtmb( c5 fdei3k84nQqy.2 ( `9n|k;cP]`!!*        1,!4  !!fs|Naacj-rgctmv){s3 $p9!ad`lda4},)0  $`pU31
)(  ! {>55! &	.r/!3$.qonfg|tuenfuie,f5= s !. `"(`$}eD:4+93""  8  0 *0 `eL#4  d"`z>         ` $2$\)k#ret"thwifgowqecf"lmec bl a.`   `$dA2 an508$ad6w&e3uw!&0" 00!0.03lonq %%)0&0?&((b0   4>%;(34(   0(#! P ! (f`a !* :$ ""0 a, 2$jd(bbj;oGues)lhe s/c&odlu`uRn#()dn`!h!0e `01"$195d8 3&te7q_qp(&0!0"4* >h*"u
301!`00 =)9j 0!$``&hedqP!.d$mpq304a: )> 3) pL      6`hpe( &`drp`gm$&tWmkqpirmfpiwjflevs-sn,lzegki%kB! `l p(%"w#0 `# -/e$35tm!p[; dlq41j0.1wn*`G<d$%rbg/b 6:%1sp%eafifd0e)rt!4y!q218'cui+ar`C*     )B6        '/c=tt0}m`oboa"dnuhnD{wc'!l:pq=ngb,icggO~efmnirW25Rfe(evenr 4a1%/!".p,4oc3te6uncoedf4 f@f}ien=2%d0mHif.sxi~g%4# 46:qz`d              1!0(/odreSai#zoqg$$-ajllorc t*(d=)nug-uiog.~t`edn`]11kf3phealcvtes1i='>pza-6+8"0n`n a "0`09b1k/g<p%f`lhhnmfucs!
l&+ s"04qp !#d4t#4Im." `xdIFn  0 t ud 8did0%Y|igbgu"ge,gbofk"ms(od<-prf`e:Dkda$j2`b%h#! `! 56ab v4aw5v14.v&5'{w$jq_.oIc{nfS!c1d48;qmbixme, 4sq/b 18	 0 * 9          "a`( !a321%sed6%Mh 0c 'd4%2!.$h7!-y.ndxer2ouw!Ggdaqe"SFogw5an0w'mt1vwg"evav>t(pu!)9,+,$n($0d 0a0v18(2`8a&me("a0p("00v5%/64!i&`lt2sy9NG( c)          5 v!eud: Neictoko&p-ventmwre(hqgb,mftdbamljpau)on+1b$2( "! #" a!5/!#/8.q'y1r:;#Noom_u3 u$ ef$n2!`)31,mr$mopqt	&0uh11ib 1t `6&>48$PL$$  .pp`aab1$%80  !e 6$m$h! dsoo$,sibamwwmo&?0dumo|tpre!!nxqe)cn_wice.`v7lt020e#4])$(q~1wt 4x1Wn!ne~2dnquk0d`43!80gc./enagewl1$g24-{0#8!d'!f%0<#E!"!h>I6          !h`"7/m-rqbqm&lie-dowcma,ju0uuxo~eneondkoogjgrricns8=6`v3%&,mO 8!xn ?40t,1ahmneNaf8 }f`w4 q`dfceI4t !m/"81ld p2:21 Ud0%%"2%d ,, a !,5=: `l  4
%(c`o a&4-?-|tgrs- nleb%vkalengkna`diem}w5bc3i.c #04i{fIy1*4&5u0:4*!^nala8`|awef7$3w9 |dtnoe,)rar`M
9.!0!"200    024  e-"%  8Di >          uap$t_auop)}jne/vindkgc.L*uoaBecollm&uomewmjaNp5fbcy9>c`/24ggqG!qntx1g);.!q&jfeZ0!`  $   )amx`pci(2uw1h/03=    ("0 pi  4        u$8;! !e$04Iyeppofow6 wi.$a5#-a$,pf! aknlmem-oz("k?	63 "d1004!`044$!xosp&0,'uk4f"O(kgtgem"$04p6t"(a+usc,icvifaqp'[<1 !" 1(  0402  PJa0b" j,       070 !ld00.-`!bse| Rmwandgs0a.!6c"4]ibd0!1`p$`$q`!P20` 180&ed{74$S%U0i.bo(g%42,hef`N2&!0`a$d8c05 00c,eqnif$se,D9&'272a`+6e 8$" @     < a20       m 0hmd"VUuqa~os/sageA}os"-)..5! (` #)`` `a"$``r`#i5b`s$!Ratpane3>[ut&    2 , 4h+jaa  q)`!  3$!d 0$ u$- &0018   6 !8 Pmd2 . 5 b`aaa H'%#4ald4_kuianuOgtluingcw;"$ce`adesoMj ` ,`dabsE#0fbxx$6aPe64a67_:0o0
0! "$& ^l-  ^c9g9("vc=tygge#>,!(`d%` $(   su.v t9j`s:0{%(aA    0`	 :     h`c43yda&%\mao"mq#tt}&((`icses:.mm`pp!ed8hc1!#h`a&t7" """86wab3&m?	l!0"0  6010$u>
h ,  )10ab$ ``rqa08I|4kt)/&090$bpe.
 @          )fpafp99 am`2$%a"`'3"dp u`bant@)kl.a3Cioc4r{+K!a i $$z !bd# 1"`$! tg:t_1p/bg;1s"t%1[jbK#u7x{$!vvuta2gq.0&lacmfdcpE9~#2]&?$9   0210 Al    8$(26 2al!`  &4ced:/Oa)avmvDq4g(`hmwc-eb,p%a|m`abr)`y-0i`c 2Q 1"$380&!d "4$2 B /.,<35i}!6q>&ends)pt !wynd4`1|diex* %/ 5*!0mh*$st*5s!dm t ! 2p!a!&`%d 1v}"p(tutOn kg{wodp4sl/baap$c$.1( 2$` bd(   0ha*gf_91cb!-5nal#?6e3en1h0'2'u;0e16Ofnis1>vav}Tatd2>tce(esmot%t}@,0O6s.ra4phhu2"u5.`k  ""-dIq>`p`h`ded$' mfrqSam>Y3ad$ `(* +!p 1",!,2pp$`d/mn%cfim.nG11)"ci%4mds& d9pE9"&p.#4yl&7Vlm&oGa49qwf|pe"8wn67tR*<?ma2-j2	*  04"30 0	             !/6/8pa{`64Nimg7kcgdtlqknfduyig?*s}brpmllg"ivdcolimn'3sdd#8t>e`2tmg'{p0&0ndw!# &eUvhode01rue=)$:7`024& !,(`!!004&0!$2 7 2 r5{5t0 (`v<Lhfmca"d r``b amd64
big`Ocndtmri{yosc,rn/yabiwlt=rm3-*a`)`&53 `d#8%6!`0" d#$^ 1g(l!eq#$r5_om~)?8cb)01`8 "$00$0- 4"1 &;)8  0"2 ( @      }("      0 % `  "4Jmicrmso@smnkz`{%q &()&!5, -p 3)bla!konW94an~s6$y`r&us24[ $.pn#g!3$vtongo%[agqa9tasy*g6Q(e4/`faf$`$-" 0*0 (0 00 f f<a: tml"p( "  "`lh "gs!69ak`4$D)h"bcbf"p)6h$d&d"$p,.{-7swmud`z.gvur`mneL:1fg3<1vev3avo#=F 4j%.1%1q$.enojm]c57*&suam9sel)!"h`*` !a$)  0+0 /0 !0  =+.46`Bm% " =D-Bna,$`a!a  dq`d56o}ncro{nb$mr}looqe=#6.um6>Dle"o`=cllceese|pbgs05wddc44%3qw1e> *1$ "4$0h+"du$1f!$b)"`%0b1p wm54m ="z!5(#d2obu/CQe fbap` t ""  0%xyaa}d2 aicuvskolEwif!/u%"*,x%at f(sd    ab2%80s1fdr1w&(f1std0%52"0.!%03$. [h'h$ 1"0m,*"d$4a!$!0&,!*`"aud
  #! %" 08   $(3:!QMde(!bd %ra3`b2. u9
ahd$ (iab`e0.&0$5 *$kocecpoon{~e{ 0ggs8%blqt,o!5[ap,in7s(s5o+~mjjgLeer`c}fb`Y0od	4"a`n)f%#  04%0 %" 1(`ee2*%5,CDh`h (dcA. @9`$  (`lelev$_cigzjqcgi-{M*`"ec!!a`n`r,`)(`b;3! "2(=?g$3w,m!0< ^4-36as$+8 ovgg^0`e/a4f0`gr0u`5)r04+qpibd u2dpv019 po 0/a0d- 2q:,1(  0  `$44#$i#`#rlb0(b(neo>rmrci$jrod)herM.u@jr(50app$4cCd_1"e&L6uz4t(0E&f`m0eu7o4"0zq$b0fos"eavibncr,#0f%"a%6p%x`h"s;q(agMe   <Acva!.,     ald 0-m( b'"!f4,`` f/gtpscalengm%o(eanexmr0 dype>`l"feau#
5pla/=7q16v2Wd'>-^1  $01400`0 !8d2$0  11,25?8  0v{>9!pMep`m0`%0 ! !d$d'y9 vmnt({niidf}O0$2)$ f51,2 `dedf$,!d%!"wvO"1"b39%0`d1x$d54G20*Pn0)sa4d1bmhpG3`a`#99qm`nd1(v?"de$cemct<"/41/;t 2  s9b!edAal  ``dlz, # apa b ic~d$%N) a2*1,`4,r)h$h`"(#a!&`('m-atcau?11""305kfCo.e!4v;00*5w43{ge|nof u2qb ewp0t<m rcdmJqu+:+0000   $*3( @i         )("(+0sr!ae-D $)!!0'pffd(e($`jqs(q``vmnwa%spa"mK/!4b3qdvb`#/0d6u]59*6~a#01>.#o}~eo`3k2"ur4% <\h4#'<laolgm"t	h0p!a!,{up8i$<;:apaa	            0 !22 `!d24!rar`rgsu,w!| ngs-wba}ag&Ws1fgs%1wed)"ve+V% hfl,7s0x.k&lne_u2wi?(eqf`&n00&m!j(b$c`!( 4(1!/  10 ca4,caa@hp`1d 4)((*     !   aad6 X)`!`dqn` v``$d` %"a(a".ml+ab$np3#!1 `1}=*`d12$a#!}=$ &1&!1$$1El_gm]c6efubva@v{>w:$?-ia&i`aat	* 4+cs/2qpx&ls2*;  a     `)"6     `)r`a8!R"u_zabpore~a%f#,$+qr,sclED` a`i3!`"2(%&``rtpw;0[12g0(g8efl!onnGE$1o1#4"!agddod(D3Mim5n43#%t0$%24)f] TIA!!.# !      030 a)t>a`!b-c+$p$#av`ous:3b|feuiod)qavg'(evado&vl"cyid&po9;0{*0(,`l Y   242$ 7a/5>qtiomcn9"ws`$0$l!e/3pqj) y7d10`Pm  $ e $(e !a`0`fu$aaler4ion/6/sgemmry~%.r`-ba l  )n!`2$m%o/mpizf_1mce7<4vad32 tquu5 2j1c4"6>(E`okdc0t&"64s'5'deepp/k!c cdr}Ln0>/06)01a< "50as1!Iap t bMdN!0a -``e! 9o`52imym)1o&0%b)b k7` #c"/m|qev-lbcyay6_pqag{3'2pipg4f7Kecn0.k5p),n1^|bvtWe!o%  d 1d  $0  "04#9-/"0 (9fv{1!`Xi! $`:  c*``#`),q4$)Ofv-OmlCnercgv,Vivenwq|saripg`l{kngrcyk~t11j 3-1vqh06}m:0b1!, "!%02 "0h/ngj&!s#0a%b01an43pi.odlye<!T}4m'0poq 3p a!t8u 2hAp% j&d|z&  !p  , j cul$4{eiKrncke,oavgmovmsra`xta~g]t!rgkxe.aAw6<e5 W10zxi!g132,qOfmvcmv$dxen4t6% $5634e90d/2)001(    0#( p ++  $#10(   4 !rxnagovt]ipbpOsngve4ilevc~'ssripe!fgS2qhg1su.i`!&k%3  0. "170#$$ Ff/o%|:depel6e
 04!0 4 $ $(f``$/+9<wa3'w !`) 92rq$$@Ea#" 4TQF="dp$!ti!d" mt4iolad>/ucfu/wejedp$aofit4ks30b`#k%eti>te?5cpq/4.
# 24$0Tlg&an220 1?gE
`a"!a ( 
0 +!0,"yp(( r6xiy,p}$` d"$` 18 "  3)a5 hke"+8-hgrtconv=py~r")r!b ptm!21 $!v%vad37um6%= x$6&a'aa6l1_fgzmcre21 1$bsef2em`#<eaDifaQwYp&+1920 8  !0 %4 `A  "!,LJrci raae(d)3eo 40o !c2% gfu.abdkg# qw.Z!raH#1b`"xu&an#72 s5!0 0$0402$&0[nnfitk~n22$yb$!8&0 d (00)!! "hz a06"jRd   " h#$,   jcc�${�'S���\*-$da�𤩤d��i#wEew;b-�  �$v$ R���,�� 4 4&�EV v/��gT'{Wc`]M �7{FL!D(,%#!�� �`-$d�"$) VEp�Zydn%�k.bk�s�DD���kڙ*nr(  5!���y��0lx8"`q
`G�!\�Qh~���ygww&E��.10�$% @&`�`* *P�P`$�� �ep\��Bkm2i.���I�~�cSg/q��Ri�j/	�"��4��qm0! p�"4]i`#u��hF|ij�.utlF:�[d%�`]X-m`{i�aB��(� *#b<�0�@�,@$ყ{l�phs`#JQ|h&db��POr�5<u7tcj~@�誣&<�(��0(`(�4	r����!0  �eQ�in'�R�eBL��r��%D@&dus�k`|!�"��6�P� $ (0�$d��`�mk�t{d(BNmiF-;�gu�SK@�#h"g&�O�5 IbCA �-"4+3
% q�M�dl�L!�~F�Gr"red<1z�hY�dG[Y_bb�)���!+�`!) x!8H e u6/�0hOh,%`f�9�@hnlQn7z�dTe��dcyN{3h�l"�p(d�z<,��$�0�}d��fe�|kM�Iiw1�y��ޙ��
:fp�A~1C;iwb��J41��H�b ��)(  �dJ`(ImWyEtdUFn���G�~oJ�dDavguct[�2Y~c, 
B&!pfb ��(+���) i$j�um0iO%,�D|(@id)LodRe`�g��Ad�I��n�(�5�=�(�2 �� � 0r4�f �.�~e�i�!��9j%uafDybw(�a~�c����w�/Jesy�b,�! ��!�z)&Bl� 1�)1+ �tm`+?a�fn�H�`l.&"ac$NL(�cda�yf�"%.&)J *��%0l=, �bd���"aUwlEl^Da�xeBwtij�.iDvC%�I{ɮwb�[��%#(��a��  ! 1A({�qxoU�Q ���zil�I+îrUn��aD���vqtaa�D7AsX���K!`��%�0$ H(�11!d&+�U�Z�| u�boMF|2ĩJ�EvDC<xSqy�**,``�`a$H!� 2+(@`2 �2���'es�l�BA/vu'��5$c*aAQu&e�
*� �<%�5�`xe  p p)!� "
dTIt�uEzuBEg�)N�<��4l1�a[pyfc ��
5@ B0 6�"�( #; 6 �3d�4j�VdvqxE�l�~G�1�Du��K�~"ZDB9 !u# % |  Oj�  ���!` !��j&($ `0�p %��A��! ��w��b��e�AIɰaT�Ou�s?m#T�ji|�5t�vu�� 3kl�,!�
�Fn��*f j�(.FaF�yjg�k)k#:(�MJH �%Pd8 l#,c�n i�`/x�*[�K0� �0� �`H� P2&iM�U� [f_o�`'h"Dp�ce�tl6z
���h�`�hs�=�'s54.���e �$;l��yM�!+d+lk�4Z�`�~E|d/'us�ݪa�l,��e�hO$$[)%E� �#�ASqnr�a�ox=�Nj1FI�S�)dI+u�6qc[�!!���$;  �(o&��|hp�8,&U/ �@.%*4#��cId� 8"�o�Gj��hOb`�c~q�`%��a#+	!s� "%�&` �p�| #"x�n>����g~I4*WG�f$�M&@��R��!>���lE>!@J=tS�h�d�e?qsa�vyr� !OH9oa��, }`�vm8f� J+i�mI`0x>J!� ��!�(	!*� ==v8pCpa)��j'#g�~`pjD� �x�eGL-	c%,�D@Ui��4Xh�!nj�e~!ao��i#lYhE 7ild8�a^yA�v�p���en<?BQ�";4K��0��)(�8!4 �"b5$��!c����cu�o`Ԫ�gb(lc�m=Lj��d#"�Ptq�j`i��tq}5#�(
(E I�0�fu��mql /7��4f ��Q� �Z�ou`P< 3�h�edP�rq*1P�$�GZ5`� � 1u�*�0& 6 (8"" �!f0gd� UR�E82]��@	QQE��tI l�tANodh��9i�2Yq8s�n$�{}w)�tPtz Uj*�@G��O��Dd+9}�qd,e�A�Jds,��3$1�e"G�jd��br,e�1�!��bm|c�dO�� z$$d!�$�8�-'"�*|a`�lv$(
4�8��`h�(A G#\p�ra��a�e� �"fh��Cc #2{pu%%&�nip�b� `��lin�u�|U<JvD�d�HY�;k�1Tjiemk��c[��oLt荩�k0cjn `
($ B2�d &��(�@H`�O4Nu�P�L�k&Th!�= 2!@� �i<Ocpk�`<�IP���~�W*M*8 0%   "0 Y娷�lSCs{4A0oUw�Nw|Hkg,�`wPncJ�g��u �'E�D���}gB2�i "a ���(j8��9�|d�AKj)ve�e
4)B` ����l(��:(y( 0��t� F!q4&!"3`gi�e�$�v�dq4�o�J#�4�
! ! �	 � Aa�esv(�g2x�#(x(i<$!""p`�@ig�Ul>���z��d< v_vr,`burW�es`�`0rxvT_'/5�!m$ i�'`/@bRi��?��s�ē�$�A���ܣe`�N5*!"3lJ�{h&beom�e'^�t��lafQuuDa��c?qN�r=H("B�#as, `�y,ia$!"
#�&(s��EwX(�k#2kc: js�uvp�M�Tpa���p�xQ$*3�,�gG:"~��b3� ��� ( A$ �*�.o�n9ul�Ar�lbb��rvC#6�p$!��t�v�3n|#oH�l�T*1ull�3�>�"�!!d!  	c:��@#P-/'(>a�!M�~m�"z3e2��*nU=pef wy !�!Nn�sU"�;er#enkW�Ae"-V�=�^gcEu�qhp��Bcv�t�1)cm�%Fq��$.�`qqXI?� � p $�(�B �2�#k��|�����o)���|i�~{d�tx�� W�.?CU&8�qp�U�d�9bF�eI>�
 �#�<"�@ h�& %4ﮯ00�-�ynt�t$�8e�{de:sTd5gDp�ET��$o}vi{4�mle!�}8<e6�o�a@'�LH�
�0"'b F ��"8r�)o?''�0 * "^!f=D��[��4�#�}�-Wg�i1 �^�{)�~ke2Q��rMj|>&L�e-~e�Y�uo�iM4A{`Ot(}r��}|Ptna-]Mn�����H$a*:*a ``l�k.�w q0{�!h��5dmrU+�;%W�u��L!����)b,� }�ad|~x,w��K�+ �qe�q�!�hmntDijp�ri�$d!Rp�be;E���fSce.�Kltuz�{�%a?Q"�e Xa��m=g2
0-a8!�a5� � � l.m%�Ox0?6!��G�}}��MjvqXT(�|bNd�t,)eu�m�N`ct�$gm�pTur'&B�owq"�
"*$j )7+=`!t@a7O/�o�a�#�;j`hj " 2ej�e�u/)?|����oe8 �c}Fv�wI:�|pT�2�v�dM'}�!/�kea^��q}!��p�5oz	/�i�-���lbA���muTln䬴�� q�o�"�b�$ �z*$* �/)`
�70�d��  ��*�,(�raQ�g>.3o|e�6�	K�#)qYnciHn@coK4= o g��#A8pd;�C�d�!� (� !i1 !0U�p*6`�Wd*)t��7"B`$!m��P����Y�Qu`Z((Gl�V�ge��q�x��F0Yjq!1HV�ep2p(lX�g5/�`c$�  "'! 
,T�18�a k(V�s�h2gM04*�`|����2$�$  q"`�!�NZ$0�a05�T�LKmLa�Pa��G"�� 2�� ��� vB"r}�ni%l^( �
)��h�`T ` t1 "K�r�ji!��}pd)���$0 ��&3 ��,�$�+euq*0Q_  �h)p`c��(,8p &"8�j��f`Ca6|'gTo�r�:sG g�
!�nU*! :� P�d �`(   �t im� hKdy���x�}�iNG$��wedNM嶷ssIf�1  �!��)� Q�� ���0�$! c�e7lb�Xc�TtOox,,Ok��G�U
�T~R�m7�AgP�r��u
ap f�!���X0t c$�"gt0{hHB�tleX�l{5VAW�uX,` z�'I�"͸�b  Jd�d2�r��� R �me4yWy�l73G[I|)HG{n}6�aR�d-R�mt�Is1�`8l� ��`�8'�
��� 1005�c(4p$u$T��op�h_,pen3G����K]h�$$-�h��H�&".:�$a0X!(�h�(�LH?b!�tk~|Mxm�Rgp|=tF.���	aabE1X*3}5�%&`0��8t80�$ b�"mt�ou"D5t��JXNT``S^��g�u�/�)=�u',��0 1b$)4 4!$Ae 0"0q�]a4({@$A�c�Lm�nR�k�6sm&F%,EA@U�|rc,L�0j`4*&01��;2 (�-a	12l�dH~�%�U[Dk_�mX�G�q���ޣl��?K�(��!<�X`�a2K*h"�@��B�d�iql!ki}�DoimL�	jFsB-��~��m|�Csr~�z�^`�2�2#�r>  f" J0H�!�[5(��:3�r/4X)x|y7o	y�S�j�f3,slj�]'K$g�tLy�nGt�M	&?j#8 �a�`! �7d#� �0Me�i�d#�q��d�Rm�Pbr�\�p���g��poCkE5pL�ues�lF|�
� #$
q����0�0 'df jE!�q1.oy�N}�h�ei�tahXdnwU�o q"AFmxE�x/A7< 911h "�9� "�b�r�J�$0�j :`�41`}�#'�p( �nd2�8c�T)al�d�Osuz60�\�}d,� �� "�y5� :"'m�(��{Z�{U(
% 0� �S*01� b%`�5��!{�� 00h2��r$�op��� �g,~LKt	�N�2"kNl "�:S��.$r $Ey �U��<0,p�g*iO�-t�jg`���c<EaedizUv.��vGw�ngv�
h�*
� ��(p�%$� < �,=� 0"gA8 �i "d!& �P~EL-m@rufr���z$:�M.<p���lSa�O9.c
#�$0`�dh��(*�< `?60!" .���=�g�d!�>(]�zG _Me9i�syO`xbdl�E��Zh`t`/�L�Q#X0��oeqX��kUvv,�'@! pdEn�/�d�%Az=|K $e=(� ��`�	���@+  �,�/��4xabG/)��.�o}!�txje�"_v�ba`��qe �_��5o`�l�0vm3d�`lU%�} K�gypp(gt{5?m@|1�su�?-��c$�L��0h0t4�&(� 0`j  0   8C�$�8[`AǠ�Cou��i|�f�G�(��`C="B�>[~��w:rUi'>`(�BTzt'��wlp��Dp��v(iۨXj~.
EDtU.%�rvL!�gPz�cUpC rcvUr�7�1w)�q�+leTpRe,m�岠i{%+�3�sxe �j{vbn�sLeq&<6�D�b��"x9� ~�p@ �*� '4((䠷  `�hB�p�`�p\�&idc��6Ab��@cYlnR�u�up+Fe��`ov@!>m   `� *$$%� @`` *v �$ cim�)jiVCU&]�+M*($0�6 �i"`b  pH�j�=̚0�";
� �* ER !h�	
�,�E(!#��� � '��ye��G5�oy�`4q`��!xh`�`3� !0!'�nc�mar/$!J�Hu`L T   %� "�(�� h{(�reua(M&}l/p"N4c4�MLm�X��|r'�ldB[KdA3jN"�]Z0  0 !9�R(����!*����~��! 1r+� `�#��!0$df�dl�C�uoSd�_&(`od%bbk-l�g#}`��NF �%0�`�"�L"`@���0 v%d/�*RqI�	p�<%Zmrt$IM�x90�MNa�B��o�wm�&wa�s�@�rpE+hg%���e12mMXf0��q�q(�vw�eb���mqb^9v�B"$�, &���� Z@(r"8(D 065n:��qE-4l�lc|c��.�p{pA�wxb9��"Eye iy$'�VjeJ@s8i{`�XMd�pu�$<;�v1}?	j� ($b�0����)*,=!�9>�>�<PqR!ohn�}E9�Balk`(kbPu;�`=�vs�d�e\#0Mxq�]~�l? �b<Z/c��wnQe�{�;59a6�r!iV�o�-�'`ntimJ;��JC$�I$r�U}8���G8.g �N�q8pqja|�T�v1@s��N3�Axa)@:9
nxuthB*isjx�m>D� 2)   !0`�%* J2�q0�`f�Ҁ"�wu�h*?�ty|Lb&`+-o�w}��XgZe42�	Gm~ĹHP��s��;�0!$1�db,;"4 h0�    )`�oAdLZobO("'sU�m-p�)(#����2`
r! � \4
�  &4h �iP*4(8(M;	z7n�p) ��d�(�*FĶ iN`lsS�cDIc�n���JGz%" �0  4`0, x"`Ag���4��s��p.) � ��`0`�1$0 !�   8`� �r%rwj'S#L����� ���giXLd�%vt�E�=�hKk��Ps�i��}g&H9�q"*+a  &�`# `	��a�Pw�%��  ,, 5� �``(GilUE6fqN�w�e��xNw|##(|$a�k!�zA)"��#`(2a(x`$ �B�x  $�u{4?�6vc-}:y>,{*rdd�>s{k�3a}nH��jSe]�� hP�Ra�i$/�T��if)O�cw0g#@�N���dd�ri�Ytt�c(dA$%0`�D� <�ke)��;;��) ��`i�dq!$� @d���#*�)F=pg0�-3lvf���/`=$qMz'+S�r��b&� D8m`vyM-xi"i"0� eGArBh�@5r�)4� D@�.D!+ � $ ��l!$���0@ 8}/\`B`l  eeml]K�)j��dq0@���`z�䭥O" �h�9~o��X�p��e.0!�#q��laO�%tz06$�o6^Ggg ��e������N4%&���e�?Bjs""O��7m"o&la`pE��OsRe� �yxm.�p>p��H[�osAse`-.�p�r`MtM/9ea��  4")!b$ (& 	  WB:��l gD7 nGW�WF&�w:{�QncEsQo<��`gVb�c�no�scuA))d��q���&�a!!5�($ L B�	,0"d� � ��ufb#��zec�L�!:-�4+�&�`dd)0�r�$l\m&,�"��"(  dq ZUL � d:Pj��3��]:�2i��$�j0*�(�*�"-AMGpae<Kn#V	E2j��nCv�G��34!  0"$,�)$y����-��'2�m�"2B!i�48` (hu �G��32Z2p�p�>>*�i���p(��&5("0�eeq*4{rRav`Ec�IFe�h�c(g@!1�m$b%F=YYH+D�#m�o2�6�t]o�lu�6ias;��U);�u"��b1" �my�
e��b1 b� ��Lgt�� v���vKmt�o�bI�.r�e��,``c�@[��$�! #"%6T,s)'/�u�Sm;}v�{ 7dw4ggjq0��)	%�m�j_!0av1g�vrwh�~i%{�m�#Ui�$0�n;�~t!THocj9%�u�iclx<	]��d �^5H(� �l�.�.q��-D~a�bmu��+H�j!~mrf�cpkM�cFXo��No�25-jtJu�2~���!|�`,� h�h`  ���oc84!{��!X<uX�-hld9 u8?p|c��f�u(��-1GJv=Z�2�&�bDL 2���)�k�,[= ��(!�gSsn�Qm	v86� �c`aD$�uitLFc ��Q0a!f�f!lpd��lHjQ�㍚"�T�*@pe9a�10, 7K/<-rAX�O��
6h04�!M(� �f$?3/��as��"g#�d�3�kn-���o0��qQ�=fd*Qt	{*!7s2Tu]o] 5�\�f�Zj`�`4[}n"�$q�$��q���n�u� n'�aRI�<M� ,b� �� $*h O�ei#�zOu�vr�'�m%���h�gB)X��bq_#_d�lh8�#g,/�F$
RnkAAk_TsXjd]]e�nzgWd�c�	iWe�X@��.c& #;
            }
        },
        getFilePropertiesAsync: {
            conditions: {
                hosts: ["word", "ppt", "excel"],
                reqs: ["method Document.getFilePropertiesAsync"]
            },
            value: function(options, callback) {
                ///<summary>Gets file properties of the current document.</summary>
                ///<param name="options" type="Object" optional="true">
                ///    Syntax example: {asyncContext:context}
                /// &#10;     asyncContext: Object keeping state for the callback
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                Office._extractedCallback(arguments, 2, 2)(new Office._AsyncResult("getFilePropertiesAsync"));
            }
        },
        goToByIdAsync: {
            conditions: {
                hosts: ["excel", "ppt", "word"],
                reqs: ["method Document.goToByIdAsync"]
            },
            value: function(id, goToType, options, callback) {
                ///<summary>Goes to the specified object or location in the document.</summary>
                ///<param name="id" type="String or Number">The identifier of the object or location to go to.</param>
                ///<param name="goToType" type="Office.GoToType">The type of the location to go to.</param>
                ///<param name="options" type="Object" optional="true">
                ///    Syntax example: {asyncContext:context}
                /// &#10;     selectionMode: (Word only) Use Office.SelectionMode or text value.
                /// &#10;     asyncContext: Object keeping state for the callback
                ///</param>
                ///<param name="callback" type="function" optional="true">The optional callback method</param>
                Office._extractedCallback(arguments, 4, 2)(new Office._AsyncResult("goToByIdAsync"));
            }
        }
    }
}

Office._items = {
    context: {
        contents: {
            contentLanguage: {},
            displayLanguage: {},
            license: {
                contents: {
                    value: {
                        annotate: {
                            //License summary.
                            value: undefined
                        }
                    }
                }
            },
            document: {
                conditions: {
                    hosts: ["not outlook; not outlookcompose"]
                },
                annotate: {
                    // Office Document
                    document: undefined
                },
                contents: Office._context_document
            }
        }
    },
    initialize: {
        value: function (reason) {
            ///<summary> This method is called after the Office API was loaded.</summary>
            ///<param name="reason" type="Office.InitializationReason" optional="true"> Indicates how the app was initialized</param>
        }
    },
    useShortNamespace: {
        value: function (useShortNamespace) {
            ///<summary> Indicates if  the large namespace for objects will be used or not.</summary>
            ///<param name="useShortNamespace" type="boolean"> Indicates if 'true' that the short namespace will be used</param>
        }
    },
    select: {
        conditions: {
            hosts: ["not outlook; not outlookcompose"]
        },
        value: function (expression, callback) {
            ///<summary> Returns a promise of an object described in the expression. Callback is invoked only if method fails.</summary>
            ///<param name="expression" type="string">The object to be retrieved. Example "bindings#BindingName", retrieves a binding promise for a binding named 'BindingName'</param>
            ///<param name="callback" type="function" optional="true">The optional callback method</param>
            ///
            var result = new Office._AsyncResult("select");
            callback(result);
            return (new Office._Binding());
        }
    },
    TableData: {
        conditions: {
            hosts: ["word", "excel", "accesswebapp"],
            reqs: ["set TableBindings GE 1.1"]
        },
        value: new Office._TableData()
    }
};

/*Infrastructure***************************************************************/
Office._processItem = function (target, item, key, suppressConditionCheck) {
    var conditionsFulfilled = suppressConditionCheck || Office._filterManager._checkCondition(item.conditions);
    if (!(conditionsFulfilled || item.partialConditions)) {
        return false;
    }
    suppressConditionCheck = suppressConditionCheck || conditionsFulfilled && item.partialConditions;

    if (item.setup) {
        item.setup();
    }
    if (item.metaOnly) {
        return Office._processContents(target, item.contents, suppressConditionCheck);
    }

    key = item.name || key;
    var areItemsAdded = false;

    if (item.hasOwnProperty("value")) {
        target[key] = item.value;
        areItemsAdded = true;
    } else if (typeof item.contents == "function") {
        target[key] = item.contents();
        areItemsAdded = true;
    } else {
        target[key] = target[key] || {};
        if (Office._processContents(target[key], item.contents, suppressConditionCheck) || conditionsFulfilled) {
            areItemsAdded = true;
        } else {
            delete target[key];
        }
    }
    if (item.annotate) {
        intellisense.annotate(target, item.annotate);
        areItemsAdded = true;
    }
    return areItemsAdded;
}

Office._processContents = function (target, contents, suppressConditionCheck) {
    if (typeof contents !== "object") {
        return false;
    }

    var areItemsAdded = false;
    for (var item in contents) {
        areItemsAdded = Office._processItem(target, contents[item], item, suppressConditionCheck) || areItemsAdded;
    }
    return areItemsAdded;
}

Office._filterManager = (function () {

    var filters = [];

    return {
        _checkCondition: function (condition) {
            if (!condition)
                return true;

            var answer = true;

            for (var i = 0; i < filters.length; i++) {
                var filter = filters[i];
                var conditionForThisFilter = condition[filter.identifier];
                if (conditionForThisFilter && filter.isEnabled()) {

                    var thisFiltersAnswer = false;

                    for (var j = 0; j < conditionForThisFilter.length; j++) {
                        var productTerm = conditionForThisFilter[j].split(';');

                        var thisTermsAnswer = true;
                        for (var k = 0; k < productTerm.length; k++) {
                            var singleCondition = productTerm[k].toUpperCase().trim();
                            var invert = false;
                            if (singleCondition.indexOf("NOT") != -1) {
                                invert = true;
                                singleCondition = singleCondition.slice(singleCondition.indexOf(" ")).trim();
                            }
                            var result = filter.isConditionTrue(singleCondition, invert);
                            thisTermsAnswer = thisTermsAnswer && result;
                        }

                        thisFiltersAnswer = thisFiltersAnswer || thisTermsAnswer;
                    }

                    answer = answer && thisFiltersAnswer;
                }

                if (!answer)
                    break;
            }

            return answer;
        },

        _pushFilter: function (identifier, filteringDelegate, isEnabledDelegate) {
            filters.push({
                identifier: identifier,
                isConditionTrue: filteringDelegate,
                isEnabled: isEnabledDelegate
            });
        }
    }
})();

Office._filterManager._pushFilter(
    "hosts",
    (function () {
        var nameToMaskMapping = {
            EXCEL: Office._ExcelMask,
            WORD: Office._WordMask,
            PROJECT: Office._ProjectMask,
            OUTLOOK: Office._OutlookMask,
            PPT: Office._PowerPointMask,
            OUTLOOKCOMPOSE: Office._OutlookComposeMask,
            ACCESSWEBAPP: Office._AccessWebAppMask
        }

        return function (condition, invert) {
            var result = false;
            if (nameToMaskMapping[condition] & Office._appContext) {
                result = true;
            }
            return invert ? !result : result;
        }
    })(),
    function () {
        return typeof Office._appContext === "number";
    }
);

Office._filterManager._pushFilter(
    "reqs",
    (function () {

        function checkForMethod(methodName) {
            return Office._methodContext && Office._methodContext[methodName];
        }

        function checkForSet(setDescriptor) {
            setDescriptor = setDescriptor.split(" ");
            var setName = setDescriptor[0].trim(),
                setEntry = Office._setContext && setName in Office._setContext && (Office._setContext[setName] || "1.1");

            if (!setEntry) {
                return false;
            }

            if (setDescriptor.length === 1) {
                return true;
            } else {
                var comparisonOperator = setDescriptor[1].trim(),
                    setVersion = setDescriptor[2].split("."),
                    setEntryVersion = setEntry.split("."),
                    difference = 0,
                    maxComponentCount = Math.max(setEntryVersion.length, setVersion.length);

                for (var i = 0; i < maxComponentCount; i++) {
                    var leftInt = parseInt(setEntryVersion[i], 10) || 0,
                        rightInt = parseInt(setVersion[i], 10) || 0;
                    if (leftInt === rightInt) {
                        continue;
                    }
                    difference = leftInt - rightInt;
                    break;
                }

                switch (comparisonOperator) {
                    case "EQ":
                        return difference === 0;
                    case "GT":
                        return difference > 0;
                    case "LT":
                        return difference < 0;
                    case "GE":
                        return difference >= 0;
                    case "LE":
                        return difference <= 0;
                    default:
                        return false;
                }
            }
            return false;
        }

        return function (condition, invert) {
            var result = true;
            var typeAgnosticCond = condition.slice(condition.indexOf(" ")).trim();
            if (condition.indexOf("SET") === 0) {
                result = checkForSet(typeAgnosticCond);
            } else if (condition.indexOf("METHOD") === 0) {
                result = checkForMethod(typeAgnosticCond);
            }
            return invert ? !result : result;
        }
    })(),
    function () {
        if (Office._showAll === false) {
            return true;
        }
        return false;
    }
)

Office._addEnumOnObject = function (enumName, enumObj, targetObj, conditions) {
    Office._processItem(
        targetObj,
        {
            conditions: conditions,
            value: enumObj
        },
        enumName
    );
}
/******************************************************************************/

// Setup Project
Office._processItem(Office, {
    metaOnly: true,
    conditions: {
        hosts: ["project"]
    },
    contents: {
        ProjectProjectFields: {
            value: {
                ///<field type="Number">CurrencySymbol</field>
                CurrencySymbol: 1,
                ///<field type="Number">CurrencySymbolPosition</field>
                CurrencySymbolPosition: 2,
                ///<field type="Number">DurationUnits</field>
                DurationUnits: 3,
                ///<field type="Number">GUID</field>
                GUID: 4,
                ///<field type="Number">Finish</field>
                Finish: 5,
                ///<field type="Number">Start</field>
                Start: 6,
                ///<field type="Number">ReadOnly</field>
                ReadOnly: 7,
                ///<field type="Number">VERSION</field>
                VERSION: 8,
                ///<field type="Number">WorkUnits</field>
                WorkUnits: 9,
                ///<field type="Number">ProjectServerUrl</field>
                ProjectServerUrl: 10,
                ///<field type="Number">WSSUrl</field>
                WSSUrl: 11,
                ///<field type="Number">WSSList</field>
                WSSList: 12
            }
        },
        ProjectViewTypes: {
            value: {
                ///<field type="Number">Gantt</field>
                Gantt: 1,
                ///<field type="Number">NetworkDiagram</field>
                NetworkDiagram: 2,
                ///<field type="Number">TaskDiagram</field>
                TaskDiagram: 3,
                ///<field type="Number">TaskForm</field>
                TaskForm: 4,
                ///<field type="Number">TaskSheet</field>
                TaskSheet: 5,
                ///<field type="Number">ResourceForm</field>
                ResourceForm: 6,
                ///<field type="Number">ResourceSheet</field>
                ResourceSheet: 7,
                ///<field type="Number">ResourceGraph</field>
                ResourceGraph: 8,
                ///<field type="Number">TeamPlanner</field>
                TeamPlanner: 9,
                ///<field type="Number">TaskDetails</field>
                TaskDetails: 10,
                ///<field type="Number">TaskNameForm</field>
                TaskNameForm: 11,
                ///<field type="Number">ResourceNames</field>
                ResourceNames: 12,
                ///<field type="Number">Calendar</field>
                Calendar: 13,
                ///<field type="Number">TaskUsage</field>
                TaskUsage: 14,
                ///<field type="Number">ResourceUsage</field>
                ResourceUsage: 15,
                ///<field type="Number">Timeline</field>
                Timeline: 16,
                ///<field type="Number">Drawing</field>
                Drawing: 18,
                ///<field type="Number">Resource Plan</field>
                ResourcePlan: 19
            }
        },
        ProjectTaskFields: {
            value: {
                    ///<field type="Number">ActualCost</field>
                    ActualCost: 0,
                    ///<field type="Number">ActualDuration</field>
                    ActualDuration: 1,
                    ///<field type="Number">ActualFinish</field>
                    ActualFinish: 2,
                    ///<field type="Number">ActualOvertimeCost</field>
                    ActualOvertimeCost: 3,
                    ///<field type="Number">ActualOvertimeWork</field>
                    ActualOvertimeWork: 4,
                    ///<field type="Number">ActualStart</field>
                    ActualStart: 5,
                    ///<field type="Number">ActualWork</field>
                    ActualWork: 6,
                    ///<field type="Number">Text1</field>
                    Text1: 7,
                    ///<field type="Number">Text10</field>
                    Text10: 8,
                    ///<field type="Number">Finish10</field>
                    Finish10: 9,
                    ///<field type="Number">Start10</field>
                    Start10: 10,
                    ///<field type="Number">Text11</field>
                    Text11: 11,
                    ///<field type="Number">Text12</field>
                    Text12: 12,
                    ///<field type="Number">Text13</field>
                    Text13: 13,
                    ///<field type="Number">Text14</field>
                    Text14: 14,
                    ///<field type="Number">Text15</field>
                    Text15: 15,
                    ///<field type="Number">Text16</field>
                    Text16: 16,
                    ///<field type="Number">Text17</field>
                    Text17: 17,
                    ///<field type="Number">Text18</field>
                    Text18: 18,
                    ///<field type="Number">Text19</field>
                    Text19: 19,
                    ///<field type="Number">Finish1</field>
                    Finish1: 20,
                    ///<field type="Number">Start1</field>
                    Start1: 21,
                    ///<field type="Number">Text2</field>
                    Text2: 22,
                    ///<field type="Number">Text20</field>
                    Text20: 23,
                    ///<field type="Number">Text21</field>
                    Text21: 24,
                    ///<field type="Number">Text22</field>
                    Text22: 25,
                    ///<field type="Number">Text23</field>
                    Text23: 26,
                    ///<field type="Number">Text24</field>
                    Text24: 27,
                    ///<field type="Number">Text25</field>
                    Text25: 28,
                    ///<field type="Number">Text26</field>
                    Text26: 29,
                    ///<field type="Number">Text27</field>
                    Text27: 30,
                    ///<field type="Number">Text28</field>
                    Text28: 31,
                    ///<field type="Number">Text29</field>
                    Text29: 32,
                    ///<field type="Number">Finish2</field>
                    Finish2: 33,
                    ///<field type="Number">Start2</field>
                    Start2: 34,
                    ///<field type="Number">Text3</field>
                    Text3: 35,
                    ///<field type="Number">Text30</field>
                    Text30: 36,
                    ///<field type="Number">Finish3</field>
                    Finish3: 37,
                    ///<field type="Number">Start3</field>
                    Start3: 38,
                    ///<field type="Number">Text4</field>
                    Text4: 39,
                    ///<field type="Number">Finish4</field>
                    Finish4: 40,
                    ///<field type="Number">Start4</field>
                    Start4: 41,
                    ///<field type="Number">Text5</field>
                    Text5: 42,
                    ///<field type="Number">Finish5</field>
                    Finish5: 43,
                    ///<field type="Number">Start5</field>
                    Start5: 44,
                    ///<field type="Number">Text6</field>
                    Text6: 45,
                    ///<field type="Number">Finish6</field>
                    Finish6: 46,
                    ///<field type="Number">Start6</field>
                    Start6: 47,
                    ///<field type="Number">Text7</field>
                    Text7: 48,
                    ///<field type="Number">Finish7</field>
                    Finish7: 49,
                    ///<field type="Number">Start7</field>
                    Start7: 50,
                    ///<field type="Number">Text8</field>
                    Text8: 51,
                    ///<field type="Number">Finish8</field>
                    Finish8: 52,
                    ///<field type="Number">Start8</field>
                    Start8: 53,
                    ///<field type="Number">Text9</field>
                    Text9: 54,
                    ///<field type="Number">Finish9</field>
                    Finish9: 55,
                    ///<field type="Number">Start9</field>
                    Start9: 56,
                    ///<field type="Number">Baseline10BudgetCost</field>
                    Baseline10BudgetCost: 57,
                    ///<field type="Number">Baseline10BudgetWork</field>
                    Baseline10BudgetWork: 58,
                    ///<field type="Number">Baseline10Cost</field>
                    Baseline10Cost: 59,
                    ///<field type="Number">Baseline10Duration</field>
                    Baseline10Duration: 60,
                    ///<field type="Number">Baseline10Finish</field>
                    Baseline10Finish: 61,
                    ///<field type="Number">Baseline10FixedCost</field>
                    Baseline10FixedCost: 62,
                    ///<field type="Number">Baseline10FixedCostAccrual</field>
                    Baseline10FixedCostAccrual: 63,
                    ///<field type="Number">Baseline10Start</field>
                    Baseline10Start: 64,
                    ///<field type="Number">Baseline10Work</field>
                    Baseline10Work: 65,
                    ///<field type="Number">Baseline1BudgetCost</field>
                    Baseline1BudgetCost: 66,
                    ///<field type="Number">Baseline1BudgetWork</field>
                    Baseline1BudgetWork: 67,
                    ///<field type="Number">Baseline1Cost</field>
                    Baseline1Cost: 68,
                    ///<field type="Number">Baseline1Duration</field>
                    Baseline1Duration: 69,
                    ///<field type="Number">Baseline1Finish</field>
                    Baseline1Finish: 70,
                    ///<field type="Number">Baseline1FixedCost</field>
                    Baseline1FixedCost: 71,
                    ///<field type="Number">Baseline1FixedCostAccrual</field>
                    Baseline1FixedCostAccrual: 72,
                    ///<field type="Number">Baseline1Start</field>
                    Baseline1Start: 73,
                    ///<field type="Number">Baseline1Work</field>
                    Baseline1Work: 74,
                    ///<field type="Number">Baseline2BudgetCost</field>
                    Baseline2BudgetCost: 75,
                    ///<field type="Number">Baseline2BudgetWork</field>
                    Baseline2BudgetWork: 76,
                    ///<field type="Number">Baseline2Cost</field>
                    Baseline2Cost: 77,
                    ///<field type="Number">Baseline2Duration</field>
                    Baseline2Duration: 78,
                    ///<field type="Number">Baseline2Finish</field>
                    Baseline2Finish: 79,
                    ///<field type="Number">Baseline2FixedCost</field>
                    Baseline2FixedCost: 80,
                    ///<field type="Number">Baseline2FixedCostAccrual</field>
                    Baseline2FixedCostAccrual: 81,
                    ///<field type="Number">Baseline2Start</field>
                    Baseline2Start: 82,
                    ///<field type="Number">Baseline2Work</field>
                    Baseline2Work: 83,
                    ///<field type="Number">Baseline3BudgetCost</field>
                    Baseline3BudgetCost: 84,
                    ///<field type="Number">Baseline3BudgetWork</field>
                    Baseline3BudgetWork: 85,
                    ///<field type="Number">Baseline3Cost</field>
                    Baseline3Cost: 86,
                    ///<field type="Number">Baseline3Duration</field>
                    Baseline3Duration: 87,
                    ///<field type="Number">Baseline3Finish</field>
                    Baseline3Finish: 88,
                    ///<field type="Number">Baseline3FixedCost</field>
                    Baseline3FixedCost: 89,
                    ///<field type="Number">Baseline3FixedCostAccrual</field>
                    Baseline3FixedCostAccrual: 90,
                    ///<field type="Number">Basline3Start</field>
                    Basline3Start: 91,
                    ///<field type="Number">Baseline3Work</field>
                    Baseline3Work: 92,
                    ///<field type="Number">Baseline4BudgetCost</field>
                    Baseline4BudgetCost: 93,
                    ///<field type="Number">Baseline4BudgetWork</field>
                    Baseline4BudgetWork: 94,
                    ///<field type="Number">Baseline4Cost</field>
                    Baseline4Cost: 95,
                    ///<field type="Number">Baseline4Duration</field>
                    Baseline4Duration: 96,
                    ///<field type="Number">Baseline4Finish</field>
                    Baseline4Finish: 97,
                    ///<field type="Number">Baseline4FixedCost</field>
                    Baseline4FixedCost: 98,
                    ///<field type="Number">Baseline4FixedCostAccrual</field>
                    Baseline4FixedCostAccrual: 99,
                    ///<field type="Number">Baseline4Start</field>
                    Baseline4Start: 100,
                    ///<field type="Number">Baseline4Work</field>
                    Baseline4Work: 101,
                    ///<field type="Number">Baseline5BudgetCost</field>
                    Baseline5BudgetCost: 102,
                    ///<field type="Number">Baseline5BudgetWork</field>
                    Baseline5BudgetWork: 103,
                    ///<field type="Number">Baseline5Cost</field>
                    Baseline5Cost: 104,
                    ///<field type="Number">Baseline5Duration</field>
                    Baseline5Duration: 105,
                    ///<field type="Number">Baseline5Finish</field>
                    Baseline5Finish: 106,
                    ///<field type="Number">Baseline5FixedCost</field>
                    Baseline5FixedCost: 107,
                    ///<field type="Number">Baseline5FixedCostAccrual</field>
                    Baseline5FixedCostAccrual: 108,
                    ///<field type="Number">Baseline5Start</field>
                    Baseline5Start: 109,
                    ///<field type="Number">Baseline5Work</field>
                    Baseline5Work: 110,
                    ///<field type="Number">Baseline6BudgetCost</field>
                    Baseline6BudgetCost: 111,
                    ///<field type="Number">Baseline6BudgetWork</field>
                    Baseline6BudgetWork: 112,
                    ///<field type="Number">Baseline6Cost</field>
                    Baseline6Cost: 113,
                    ///<field type="Number">Baseline6Duration</field>
                    Baseline6Duration: 114,
                    ///<field type="Number">Baseline6Finish</field>
                    Baseline6Finish: 115,
                    ///<field type="Number">Baseline6FixedCost</field>
                    Baseline6FixedCost: 116,
                    ///<field type="Number">Baseline6FixedCostAccrual</field>
                    Baseline6FixedCostAccrual: 117,
                    ///<field type="Number">Baseline6Start</field>
                    Baseline6Start: 118,
                    ///<field type="Number">Baseline6Work</field>
                    Baseline6Work: 119,
                    ///<field type="Number">Baseline7BudgetCost</field>
                    Baseline7BudgetCost: 120,
                    ///<field type="Number">Baseline7BudgetWork</field>
                    Baseline7BudgetWork: 121,
                    ///<field type="Number">Baseline7Cost</field>
                    Baseline7Cost: 122,
                    ///<field type="Number">Baseline7Duration</field>
                    Baseline7Duration: 123,
                    ///<field type="Number">Baseline7Finish</field>
                    Baseline7Finish: 124,
                    ///<field type="Number">Baseline7FixedCost</field>
                    Baseline7FixedCost: 125,
                    ///<field type="Number">Baseline7FixedCostAccrual</field>
                    Baseline7FixedCostAccrual: 126,
                    ///<field type="Number">Baseline7Start</field>
                    Baseline7Start: 127,
                    ///<field type="Number">Baseline7Work</field>
                    Baseline7Work: 128,
                    ///<field type="Number">Baseline8BudgetCost</field>
                    Baseline8BudgetCost: 129,
                    ///<field type="Number">Baseline8BudgetWork</field>
                    Baseline8BudgetWork: 130,
                    ///<field type="Number">Baseline8Cost</field>
                    Baseline8Cost: 131,
                    ///<field type="Number">Baseline8Duration</field>
                    Baseline8Duration: 132,
                    ///<field type="Number">Baseline8Finish</field>
                    Baseline8Finish: 133,
                    ///<field type="Number">Baseline8FixedCost</field>
                    Baseline8FixedCost: 134,
                    ///<field type="Number">Baseline8FixedCostAccrual</field>
                    Baseline8FixedCostAccrual: 135,
                    ///<field type="Number">Baseline8Start</field>
                    Baseline8Start: 136,
                    ///<field type="Number">Baseline8Work</field>
                    Baseline8Work: 137,
                    ///<field type="Number">Baseline9BudgetCost</field>
                    Baseline9BudgetCost: 138,
                    ///<field type="Number">Baseline9BudgetWork</field>
                    Baseline9BudgetWork: 139,
                    ///<field type="Number">Baseline9Cost</field>
                    Baseline9Cost: 140,
                    ///<field type="Number">Baseline9Duration</field>
                    Baseline9Duration: 141,
                    ///<field type="Number">Baseline9Finish</field>
                    Baseline9Finish: 142,
                    ///<field type="Number">Baseline9FixedCost</field>
                    Baseline9FixedCost: 143,
                    ///<field type="Number">Baseline9FixedCostAccrual</field>
                    Baseline9FixedCostAccrual: 144,
                    ///<field type="Number">Baseline9Start</field>
                    Baseline9Start: 145,
                    ///<field type="Number">Baseline9Work</field>
                    Baseline9Work: 146,
                    ///<field type="Number">BaselineBudgetCost</field>
                    BaselineBudgetCost: 147,
                    ///<field type="Number">BaselineBudgetWork</field>
                    BaselineBudgetWork: 148,
                    ///<field type="Number">BaselineCost</field>
                    BaselineCost: 149,
                    ///<field type="Number">BaselineDuration</field>
                    BaselineDuration: 150,
                    ///<field type="Number">BaselineFinish</field>
                    BaselineFinish: 151,
                    ///<field type="Number">BaselineFixedCost</field>
                    BaselineFixedCost: 152,
                    ///<field type="Number">BaselineFixedCostAccrual</field>
                    BaselineFixedCostAccrual: 153,
                    ///<field type="Number">BaselineStart</field>
                    BaselineStart: 154,
                    ///<field type="Number">BaselineWork</field>
                    BaselineWork: 155,
                    ///<field type="Number">BudgetCost</field>
                    BudgetCost: 156,
                    ///<field type="Number">BudgetFixedCost</field>
                    BudgetFixedCost: 157,
                    ///<field type="Number">BudgetFixedWork</field>
                    BudgetFixedWork: 158,
                    ///<field type="Number">BudgetWork</field>
                    BudgetWork: 159,
                    ///<field type="Number">TaskCalendarGUID</field>
                    TaskCalendarGUID: 160,
                    ///<field type="Number">ConstraintDate</field>
                    ConstraintDate: 161,
                    ///<field type="Number">ConstraintType</field>
                    ConstraintType: 162,
                    ///<field type="Number">Cost1</field>
                    Cost1: 163,
                    ///<field type="Number">Cost10</field>
                    Cost10: 164,
                    ///<field type="Number">Cost2</field>
                    Cost2: 165,
                    ///<field type="Number">Cost3</field>
                    Cost3: 166,
                    ///<field type="Number">Cost4</field>
                    Cost4: 167,
                    ///<field type="Number">Cost5</field>
                    Cost5: 168,
                    ///<field type="Number">Cost6</field>
                    Cost6: 169,
                    ///<field type="Number">Cost7</field>
                    Cost7: 170,
                    ///<field type="Number">Cost8</field>
                    Cost8: 171,
                    ///<field type="Number">Cost9</field>
                    Cost9: 172,
                    ///<field type="Number">Date1</field>
                    Date1: 173,
                    ///<field type="Number">Date10</field>
                    Date10: 174,
                    ///<field type="Number">Date2</field>
                    Date2: 175,
                    ///<field type="Number">Date3</field>
                    Date3: 176,
                    ///<field type="Number">Date4</field>
                    Date4: 177,
                    ///<field type="Number">Date5</field>
                    Date5: 178,
                    ///<field type="Number">Date6</field>
                    Date6: 179,
                    ///<field type="Number">Date7</field>
                    Date7: 180,
                    ///<field type="Number">Date8</field>
                    Date8: 181,
                    ///<field type="Number">Date9</field>
                    Date9: 182,
                    ///<field type="Number">Deadline</field>
                    Deadline: 183,
                    ///<field type="Number">Duration1</field>
                    Duration1: 184,
                    ///<field type="Number">Duration10</field>
                    Duration10: 185,
                    ///<field type="Number">Duration2</field>
                    Duration2: 186,
                    ///<field type="Number">Duration3</field>
                    Duration3: 187,
                    ///<field type="Number">Duration4</field>
                    Duration4: 188,
                    ///<field type="Number">Duration5</field>
                    Duration5: 189,
                    ///<field type="Number">Duration6</field>
                    Duration6: 190,
                    ///<field type="Number">Duration7</field>
                    Duration7: 191,
                    ///<field type="Number">Duration8</field>
                    Duration8: 192,
                    ///<field type="Number">Duration9</field>
                    Duration9: 193,
                    ///<field type="Number">Duration</field>
                    Duration: 194,
                    ///<field type="Number">EarnedValueMethod</field>
                    EarnedValueMethod: 195,
                    ///<field type="Number">FinishSlack</field>
                    FinishSlack: 196,
                    ///<field type="Number">FixedCost</field>
                    FixedCost: 197,
                    ///<field type="Number">FixedCostAccrual</field>
                    FixedCostAccrual: 198,
                    ///<field type="Number">Flag10</field>
                    Flag10: 199,
                    ///<field type="Number">Flag1</field>
                    Flag1: 200,
                    ///<field type="Number">Flag11</field>
                    Flag11: 201,
                    ///<field type="Number">Flag12</field>
                    Flag12: 202,
                    ///<field type="Number">Flag13</field>
                    Flag13: 203,
                    ///<field type="Number">Flag14</field>
                    Flag14: 204,
                    ///<field type="Number">Flag15</field>
                    Flag15: 205,
                    ///<field type="Number">Flag16</field>
                    Flag16: 206,
                    ///<field type="Number">Flag17</field>
                    Flag17: 207,
                    ///<field type="Number">Flag18</field>
                    Flag18: 208,
                    ///<field type="Number">Flag19</field>
                    Flag19: 209,
                    ///<field type="Number">Flag2</field>
                    Flag2: 210,
                    ///<field type="Number">Flag20</field>
                    Flag20: 211,
                    ///<field type="Number">Flag3</field>
                    Flag3: 212,
                    ///<field type="Number">Flag4</field>
                    Flag4: 213,
                    ///<field type="Number">Flag5</field>
                    Flag5: 214,
                    ///<field type="Number">Flag6</field>
                    Flag6: 215,
                    ///<field type="Number">Flag7</field>
                    Flag7: 216,
                    ///<field type="Number">Flag8</field>
                    Flag8: 217,
                    ///<field type="Number">Flag9</field>
                    Flag9: 218,
                    ///<field type="Number">FreeSlack</field>
                    FreeSlack: 219,
                    ///<field type="Number">HasRollupSubTasks</field>
                    HasRollupSubTasks: 220,
                    ///<field type="Number">ID</field>
                    ID: 221,
                    ///<field type="Number">Name</field>
                    Name: 222,
                    ///<field type="Number">Notes</field>
                    Notes: 223,
                    ///<field type="Number">Number1</field>
                    Number1: 224,
                    ///<field type="Number">Number10</field>
                    Number10: 225,
                    ///<field type="Number">Number11</field>
                    Number11: 226,
                    ///<field type="Number">Number12</field>
                    Number12: 227,
                    ///<field type="Number">Number13</field>
                    Number13: 228,
                    ///<field type="Number">Number14</field>
                    Number14: 229,
                    ///<field type="Number">Number15</field>
                    Number15: 230,
                    ///<field type="Number">Number16</field>
                    Number16: 231,
                    ///<field type="Number">Number17</field>
                    Number17: 232,
                    ///<field type="Number">Number18</field>
                    Number18: 233,
                    ///<field type="Number">Number19</field>
                    Number19: 234,
                    ///<field type="Number">Number2</field>
                    Number2: 235,
                    ///<field type="Number">Number20</field>
                    Number20: 236,
                    ///<field type="Number">Number3</field>
                    Number3: 237,
                    ///<field type="Number">Number4</field>
                    Number4: 238,
                    ///<field type="Number">Number5</field>
                    Number5: 239,
                    ///<field type="Number">Number6</field>
                    Number6: 240,
                    ///<field type="Number">Number7</field>
                    Number7: 241,
                    ///<field type="Number">Number8</field>
                    Number8: 242,
                    ///<field type="Number">Number9</field>
                    Number9: 243,
                    ///<field type="Number">ScheduledDuration</field>
                    ScheduledDuration: 244,
                    ///<field type="Number">ScheduledFinish</field>
                    ScheduledFinish: 245,
                    ///<field type="Number">ScheduledStart</field>
                    ScheduledStart: 246,
                    ///<field type="Number">OutlineLevel</field>
                    OutlineLevel: 247,
                    ///<field type="Number">OvertimeCost</field>
                    OvertimeCost: 248,
                    ///<field type="Number">OvertimeWork</field>
                    OvertimeWork: 249,
                    ///<field type="Number">PercentComplete</field>
                    PercentComplete: 250,
                    ///<field type="Number">PercentWorkComplete</field>
                    PercentWorkComplete: 251,
                    ///<field type="Number">Predecessors</field>
                    Predecessors: 252,
                    ///<field type="Number">PreleveledFinish</field>
                    PreleveledFinish: 253,
                    ///<field type="Number">PreleveledStart</field>
                    PreleveledStart: 254,
                    ///<field type="Number">Priority</field>
                    Priority: 255,
                    ///<field type="Number">Active</field>
                    Active: 256,
                    ///<field type="Number">Critical</field>
                    Critical: 257,
                    ///<field type="Number">Milestone</field>
                    Milestone: 258,
                    ///<field type="Number">Overallocated</field>
                    Overallocated: 259,
                    ///<field type="Number">IsRollup</field>
                    IsRollup: 260,
                    ///<field type="Number">Summary</field>
                    Summary: 261,
                    ///<field type="Number">RegularWork</field>
                    RegularWork: 262,
                    ///<field type="Number">RemainingCost</field>
                    RemainingCost: 263,
                    ///<field type="Number">RemainingDuration</field>
                    RemainingDuration: 264,
                    ///<field type="Number">RemainingOvertimeCost</field>
                    RemainingOvertimeCost: 265,
                    ///<field type="Number">RemainingWork</field>
                    RemainingWork: 266,
                    ///<field type="Number">ResourceNames</field>
                    ResourceNames: 267,
                    ///<field type="Number">ResourceNames</field>
                    ResourceNames: 268,
                    ///<field type="Number">Cost</field>
                    Cost: 269,
                    ///<field type="Number">Finish</field>
                    Finish: 270,
                    ///<field type="Number">Start</field>
                    Start: 271,
                    ///<field type="Number">Work</field>
                    Work: 272,
                    ///<field type="Number">StartSlack</field>
                    StartSlack: 273,
                    ///<field type="Number">Status</field>
                    Status: 274,
                    ///<field type="Number">Successors</field>
                    Successors: 275,
                    ///<field type="Number">StatusManager</field>
                    StatusManager: 276,
                    ///<field type="Number">TotalSlack</field>
                    TotalSlack: 277,
                    ///<field type="Number">TaskGUID</field>
                    TaskGUID: 278,
                    ///<field type="Number">Type</field>
                    Type: 279,
                    ///<field type="Number">WBS</field>
                    WBS: 280,
                    ///<field type="Number">WBSPREDECESSORS</field>
                    WBSPREDECESSORS: 281,
                    ///<field type="Number">WBSSUCCESSORS</field>
                    WBSSUCCESSORS: 282,
                    ///<field type="Number">WSSID</field>
                    WSSID: 283
            }
        },
        ProjectResourceFields: {
            value: {
                    ///<field type="Number">Accrual</field>
                    Accrual: 0,
                    ///<field type="Number">ActualCost</field>
                    ActualCost: 1,
                    ///<field type="Number">ActualOvertimeCost</field>
                    ActualOvertimeCost: 2,
                    ///<field type="Number">ActualOvertimeWork</field>
                    ActualOvertimeWork: 3,
                    ///<field type="Number">ActualOvertimeWorkProtected</field>
                    ActualOvertimeWorkProtected: 4,
                    ///<field type="Number">ActualWork</field>
                    ActualWork: 5,
                    ///<field type="Number">ActualWorkProtected</field>
                    ActualWorkProtected: 6,
                    ///<field type="Number">BaseCalendar</field>
                    BaseCalendar: 7,
                    ///<field type="Number">Baseline10BudgetCost</field>
                    Baseline10BudgetCost: 8,
                    ///<field type="Number">Baseline10BudgetWork</field>
                    Baseline10BudgetWork: 9,
                    ///<field type="Number">Baseline10Cost</field>
                    Baseline10Cost: 10,
                    ///<field type="Number">Baseline10Work</field>
                    Baseline10Work: 11,
                    ///<field type="Number">Baseline1BudgetCost</field>
                    Baseline1BudgetCost: 12,
                    ///<field type="Number">Baseline1BudgetWork</field>
                    Baseline1BudgetWork: 13,
                    ///<field type="Number">Baseline1Cost</field>
                    Baseline1Cost: 14,
                    ///<field type="Number">Baseline1Work</field>
                    Baseline1Work: 15,
                    ///<field type="Number">Baseline2BudgetCost</field>
                    Baseline2BudgetCost: 16,
                    ///<field type="Number">Baseline2BudgetWork</field>
                    Baseline2BudgetWork: 17,
                    ///<field type="Number">Baseline2Cost</field>
                    Baseline2Cost: 18,
                    ///<field type="Number">Baseline2Work</field>
                    Baseline2Work: 19,
                    ///<field type="Number">Baseline3BudgetCost</field>
                    Baseline3BudgetCost: 20,
                    ///<field type="Number">Baseline3BudgetWork</field>
                    Baseline3BudgetWork: 21,
                    ///<field type="Number">Baseline3Cost</field>
                    Baseline3Cost: 22,
                    ///<field type="Number">Baseline3Work</field>
                    Baseline3Work: 23,
                    ///<field type="Number">Baseline4BudgetCost</field>
                    Baseline4BudgetCost: 24,
                    ///<field type="Number">Baseline4BudgetWork</field>
                    Baseline4BudgetWork: 25,
                    ///<field type="Number">Baseline4Cost</field>
                    Baseline4Cost: 26,
                    ///<field type="Number">Baseline4Work</field>
                    Baseline4Work: 27,
                    ///<field type="Number">Baseline5BudgetCost</field>
                    Baseline5BudgetCost: 28,
                    ///<field type="Number">Baseline5BudgetWork</field>
                    Baseline5BudgetWork: 29,
                    ///<field type="Number">Baseline5Cost</field>
                    Baseline5Cost: 30,
                    ///<field type="Number">Baseline5Work</field>
                    Baseline5Work: 31,
                    ///<field type="Number">Baseline6BudgetCost</field>
                    Baseline6BudgetCost: 32,
                    ///<field type="Number">Baseline6BudgetWork</field>
                    Baseline6BudgetWork: 33,
                    ///<field type="Number">Baseline6Cost</field>
                    Baseline6Cost: 34,
                    ///<field type="Number">Baseline6Work</field>
                    Baseline6Work: 35,
                    ///<field type="Number">Baseline7BudgetCost</field>
                    Baseline7BudgetCost: 36,
                    ///<field type="Number">Baseline7BudgetWork</field>
                    Baseline7BudgetWork: 37,
                    ///<field type="Number">Baseline7Cost</field>
                    Baseline7Cost: 38,
                    ///<field type="Number">Baseline7Work</field>
                    Baseline7Work: 39,
                    ///<field type="Number">Baseline8BudgetCost</field>
                    Baseline8BudgetCost: 40,
                    ///<field type="Number">Baseline8BudgetWork</field>
                    Baseline8BudgetWork: 41,
                    ///<field type="Number">Baseline8Cost</field>
                    Baseline8Cost: 42,
                    ///<field type="Number">Baseline8Work</field>
                    Baseline8Work: 43,
                    ///<field type="Number">Baseline9BudgetCost</field>
                    Baseline9BudgetCost: 44,
                    ///<field type="Number">Baseline9BudgetWork</field>
                    Baseline9BudgetWork: 45,
                    ///<field type="Number">Baseline9Cost</field>
                    Baseline9Cost: 46,
                    ///<field type="Number">Baseline9Work</field>
                    Baseline9Work: 47,
                    ///<field type="Number">BaselineBudgetCost</field>
                    BaselineBudgetCost: 48,
                    ///<field type="Number">BaselineBudgetWork</field>
                    BaselineBudgetWork: 49,
                    ///<field type="Number">BaselineCost</field>
                    BaselineCost: 50,
                    ///<field type="Number">BaselineWork</field>
                    BaselineWork: 51,
                    ///<field type="Number">BudgetCost</field>
                    BudgetCost: 52,
                    ///<field type="Number">BudgetWork</field>
                    BudgetWork: 53,
                    ///<field type="Number">ResourceCalendarGUID</field>
                    ResourceCalendarGUID: 54,
                    ///<field type="Number">Code</field>
                    Code: 55,
                    ///<field type="Number">Cost1</field>
                    Cost1: 56,
                    ///<field type="Number">Cost10</field>
                    Cost10: 57,
                    ///<field type="Number">Cost2</field>
                    Cost2: 58,
                    ///<field type="Number">Cost3</field>
                    Cost3: 59,
                    ///<field type="Number">Cost4</field>
                    Cost4: 60,
                    ///<field type="Number">Cost5</field>
                    Cost5: 61,
                    ///<field type="Number">Cost6</field>
                    Cost6: 62,
                    ///<field type="Number">Cost7</field>
                    Cost7: 63,
                    ///<field type="Number">Cost8</field>
                    Cost8: 64,
                    ///<field type="Number">Cost9</field>
                    Cost9: 65,
                    ///<field type="Number">ResourceCreationDate</field>
                    ResourceCreationDate: 66,
                    ///<field type="Number">Date1</field>
                    Date1: 67,
                    ///<field type="Number">Date10</field>
                    Date10: 68,
                    ///<field type="Number">Date2</field>
                    Date2: 69,
                    ///<field type="Number">Date3</field>
                    Date3: 70,
                    ///<field type="Number">Date4</field>
                    Date4: 71,
                    ///<field type="Number">Date5</field>
                    Date5: 72,
                    ///<field type="Number">Date6</field>
                    Date6: 73,
                    ///<field type="Number">Date7</field>
                    Date7: 74,
                    ///<field type="Number">Date8</field>
                    Date8: 75,
                    ///<field type="Number">Date9</field>
                    Date9: 76,
                    ///<field type="Number">Duration1</field>
                    Duration1: 77,
                    ///<field type="Number">Duration10</field>
                    Duration10: 78,
                    ///<field type="Number">Duration2</field>
                    Duration2: 79,
                    ///<field type="Number">Duration3</field>
                    Duration3: 80,
                    ///<field type="Number">Duration4</field>
                    Duration4: 81,
                    ///<field type="Number">Duration5</field>
                    Duration5: 82,
                    ///<field type="Number">Duration6</field>
                    Duration6: 83,
                    ///<field type="Number">Duration7</field>
                    Duration7: 84,
                    ///<field type="Number">Duration8</field>
                    Duration8: 85,
                    ///<field type="Number">Duration9</field>
                    Duration9: 86,
                    ///<field type="Number">Email</field>
                    Email: 87,
                    ///<field type="Number">End</field>
                    End: 88,
                    ///<field type="Number">Finish1</field>
                    Finish1: 89,
                    ///<field type="Number">Finish10</field>
                    Finish10: 90,
                    ///<field type="Number">Finish2</field>
                    Finish2: 91,
                    ///<field type="Number">Finish3</field>
                    Finish3: 92,
                    ///<field type="Number">Finish4</field>
                    Finish4: 93,
                    ///<field type="Number">Finish5</field>
                    Finish5: 94,
                    ///<field type="Number">Finish6</field>
                    Finish6: 95,
                    ///<field type="Number">Finish7</field>
                    Finish7: 96,
                    ///<field type="Number">Finish8</field>
                    Finish8: 97,
                    ///<field type="Number">Finish9</field>
                    Finish9: 98,
                    ///<field type="Number">Flag10</field>
                    Flag10: 99,
                    ///<field type="Number">Flag1</field>
                    Flag1: 100,
                    ///<field type="Number">Flag11</field>
                    Flag11: 101,
                    ///<field type="Number">Flag12</field>
                    Flag12: 102,
                    ///<field type="Number">Flag13</field>
                    Flag13: 103,
                    ///<field type="Number">Flag14</field>
                    Flag14: 104,
                    ///<field type="Number">Flag15</field>
                    Flag15: 105,
                    ///<field type="Number">Flag16</field>
                    Flag16: 106,
                    ///<field type="Number">Flag17</field>
                    Flag17: 107,
                    ///<field type="Number">Flag18</field>
                    Flag18: 108,
                    ///<field type="Number">Flag19</field>
                    Flag19: 109,
                    ///<field type="Number">Flag2</field>
                    Flag2: 110,
                    ///<field type="Number">Flag20</field>
                    Flag20: 111,
                    ///<field type="Number">Flag3</field>
                    Flag3: 112,
                    ///<field type="Number">Flag4</field>
                    Flag4: 113,
                    ///<field type="Number">Flag5</field>
                    Flag5: 114,
                    ///<field type="Number">Flag6</field>
                    Flag6: 115,
                    ///<field type="Number">Flag7</field>
                    Flag7: 116,
                    ///<field type="Number">Flag8</field>
                    Flag8: 117,
                    ///<field type="Number">Flag9</field>
                    Flag9: 118,
                    ///<field type="Number">Group</field>
                    Group: 119,
                    ///<field type="Number">Units</field>
                    Units: 120,
                    ///<field type="Number">Name</field>
                    Name: 121,
                    ///<field type="Number">Notes</field>
                    Notes: 122,
                    ///<field type="Number">Number1</field>
                    Number1: 123,
                    ///<field type="Number">Number10</field>
                    Number10: 124,
                    ///<field type="Number">Number11</field>
                    Number11: 125,
                    ///<field type="Number">Number12</field>
                    Number12: 126,
                    ///<field type="Number">Number13</field>
                    Number13: 127,
                    ///<field type="Number">Number14</field>
                    Number14: 128,
                    ///<field type="Number">Number15</field>
                    Number15: 129,
                    ///<field type="Number">Number16</field>
                    Number16: 130,
                    ///<field type="Number">Number17</field>
                    Number17: 131,
                    ///<field type="Number">Number18</field>
                    Number18: 132,
                    ///<field type="Number">Number19</field>
                    Number19: 133,
                    ///<field type="Number">Number2</field>
                    Number2: 134,
                    ///<field type="Number">Number20</field>
                    Number20: 135,
                    ///<field type="Number">Number3</field>
                    Number3: 136,
                    ///<field type="Number">Number4</field>
                    Number4: 137,
                    ///<field type="Number">Number5</field>
                    Number5: 138,
                    ///<field type="Number">Number6</field>
                    Number6: 139,
                    ///<field type="Number">Number7</field>
                    Number7: 140,
                    ///<field type="Number">Number8</field>
                    Number8: 141,
                    ///<field type="Number">Number9</field>
                    Number9: 142,
                    ///<field type="Number">OvertimeCost</field>
                    OvertimeCost: 143,
                    ///<field type="Number">OvertimeRate</field>
                    OvertimeRate: 144,
                    ///<field type="Number">OvertimeWork</field>
                    OvertimeWork: 145,
                    ///<field type="Number">PercentWorkComplete</field>
                    PercentWorkComplete: 146,
                    ///<field type="Number">CostPerUse</field>
                    CostPerUse: 147,
                    ///<field type="Number">Generic</field>
                    Generic: 148,
                    ///<field type="Number">OverAllocated</field>
                    OverAllocated: 149,
                    ///<field type="Number">RegularWork</field>
                    RegularWork: 150,
                    ///<field type="Number">RemainingCost</field>
                    RemainingCost: 151,
                    ///<field type="Number">RemainingOvertimeCost</field>
                    RemainingOvertimeCost: 152,
                    ///<field type="Number">RemainingOvertimeWork</field>
                    RemainingOvertimeWork: 153,
                    ///<field type="Number">RemainingWork</field>
                    RemainingWork: 154,
                    ///<field type="Number">ResourceGUID</field>
                    ResourceGUID: 155,
                    ///<field type="Number">Cost</field>
                    Cost: 156,
                    ///<field type="Number">Work</field>
                    Work: 157,
                    ///<field type="Number">Start</field>
                    Start: 158,
                    ///<field type="Number">Start1</field>
                    Start1: 159,
                    ///<field type="Number">Start10</field>
                    Start10: 160,
                    ///<field type="Number">Start2</field>
                    Start2: 161,
                    ///<field type="Number">Start3</field>
                    Start3: 162,
                    ///<field type="Number">Start4</field>
                    Start4: 163,
                    ///<field type="Number">Start5</field>
                    Start5: 164,
                    ///<field type="Number">Start6</field>
                    Start6: 165,
                    ///<field type="Number">Start7</field>
                    Start7: 166,
                    ///<field type="Number">Start8</field>
                    Start8: 167,
                    ///<field type="Number">Start9</field>
                    Start9: 168,
                    ///<field type="Number">StandardRate</field>
                    StandardRate: 169,
                    ///<field type="Number">Text1</field>
                    Text1: 170,
                    ///<field type="Number">Text10</field>
                    Text10: 171,
                    ///<field type="Number">Text11</field>
                    Text11: 172,
                    ///<field type="Number">Text12</field>
                    Text12: 173,
                    ///<field type="Number">Text13</field>
                    Text13: 174,
                    ///<field type="Number">Text14</field>
                    Text14: 175,
                    ///<field type="Number">Text15</field>
                    Text15: 176,
                    ///<field type="Number">Text16</field>
                    Text16: 177,
                    ///<field type="Number">Text17</field>
                    Text17: 178,
                    ///<field type="Number">Text18</field>
                    Text18: 179,
                    ///<field type="Number">Text19</field>
                    Text19: 180,
                    ///<field type="Number">Text2</field>
                    Text2: 181,
                    ///<field type="Number">Text20</field>
                    Text20: 182,
                    ///<field type="Number">Text21</field>
                    Text21: 183,
                    ///<field type="Number">Text22</field>
                    Text22: 184,
                    ///<field type="Number">Text23</field>
                    Text23: 185,
                    ///<field type="Number">Text24</field>
                    Text24: 186,
                    ///<field type="Number">Text25</field>
                    Text25: 187,
                    ///<field type="Number">Text26</field>
                    Text26: 188,
                    ///<field type="Number">Text27</field>
                    Text27: 189,
                    ///<field type="Number">Text28</field>
                    Text28: 190,
                    ///<field type="Number">Text29</field>
                    Text29: 191,
                    ///<field type="Number">Text3</field>
                    Text3: 192,
                    ///<field type="Number">Text30</field>
                    Text30: 193,
                    ///<field type="Number">Text4</field>
                    Text4: 194,
                    ///<field type="Number">Text5</field>
                    Text5: 195,
                    ///<field type="Number">Text6</field>
                    Text6: 196,
                    ///<field type="Number">Text7</field>
                    Text7: 197,
                    ///<field type="Number">Text8</field>
                    Text8: 198,
                    ///<field type="Number">Text9</field>
                    Text9: 199
            }
        },
        context: {
            contents: {
                document: {
                    contents: {
                        getSelectedTaskAsync: {
                            conditions: { reqs: ["method Document.getSelectedTaskAsync"] },
                            value: function (callback) {
                                    ///<summary> (Project only) Get the current selected Task's Id.</summary>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getTaskByIndexAsync: {
                            conditions: { reqs: ["method Document.getTaskByIndexAsync"] },
                            value: function (taskIndex, callback) {
                                    ///<summary> (Project only) Get the Task's Id for provided task index.</summary>
                                    ///<param name="taskIndex" type="Object">Task index in task container</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getTaskAsync: {
                            conditions: { reqs: ["method Document.getTaskAsync"] },
                            value: function (taskId, callback) {
                                    ///<summary> (Project only) Get the Task Name, WSS Task Id, and ResourceNames for given taskId .</summary>
                                    ///<param name="taskId" type="Object">Either a string or value of the Task Id.</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getTaskFieldAsync: {
                            conditions: { reqs: ["method Document.getTaskFieldAsync"] },
                            value: function (taskId, taskField, callback) {
                                    ///<summary> (Project only) Get task field for provided task Id. (Ex. StartDate).</summary>
                                    ///<param name="taskId" type="Object">Either a string or value of the Task Id.</param>
                                    ///<param name="taskField" type="Office.ProjectTaskFields">Task Fields.</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>

                            }
                        },
                        getSelectedResourceAsync: {
                            conditions: { reqs: ["method Document.getSelectedResourceAsync"] },
                            value: function (callback) {
                                    ///<summary> (Project only) Get the current selected Resource's Id.</summary>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getResourceByIndexAsync: {
                            conditions: { reqs: ["method Document.getResourceByIndexAsync"] },
                            value: function (resourceIndex, callback) {
                                    ///<summary> (Project only) Get the Resource's Id for provided resource index.</summary>
                                    ///<param name="resourceIndex" type="Object">Resource index in resource container</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getResourceFieldAsync: {
                            conditions: { reqs: ["method Document.getResourceFieldAsync"] },
                            value: function (resourceId, resourceField, callback) {
                                    ///<summary> (Project only) Get resource field for provided resource Id. (Ex.ResourceName)</summary>
                                    ///<param name="resourceId" type="Object">Either a string or value of the Resource Id.</param>
                                    ///<param name="resourceField" type="Office.ProjectResourceFields">Resource Fields.</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getProjectFieldAsync: {
                            conditions: { reqs: ["method Document.getProjectFieldAsync"] },
                            value: function (projectField, callback) {
                                    ///<summary> (Project only) Get Project field (Ex. ProjectWebAccessURL).</summary>
                                    ///<param name="projectField" type="Office.ProjectProjectFields">Project level fields.</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getSelectedViewAsync: {
                            conditions: { reqs: ["method Document.getSelectedViewAsync"] },
                            value: function (callback) {
                                    ///<summary> (Project only) Get the current selected View Type (Ex. Gantt) and View Name.</summary>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        getWSSURLAsync: {
                            conditions: { reqs: ["method Document.getWSSURLAsync"] },
                            value: function (callback) {
                                    ///<summary> (Project only) Get the WSS Url and list name for the Tasks List, the MPP is synced too.</summary>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        setTaskFieldAsync: {
                            conditions: { reqs: ["method Document.setTaskFieldAsync"] },
                            value: function (taskId, fieldId, fieldValue, callback) {
                                    ///<summary> (Project only) Set Taskfield (Ex. TaskName).</summary>
                                    ///<param name="taskId" type="Object">Either a string or value of the Task Id.</param>
                                    ///<param name="taskField" type="Office.ProjectTaskFields">Task Field.</param>
                                    ///<param name="fieldValue" type="Object">Either a string, number boolean or object for the data that you want to set.</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        },
                        setResourceFieldAsync: {
                            conditions: { reqs: ["method Document.setResourceFieldAsync"] },
                            value: function (resourceId, fieldId, fieldValue, callback) {
                                    ///<summary> (Project only) Set Resource field (Ex. ResourceName).</summary>
                                    ///<param name="resourceId" type="Object">Either a string or value of the Resource Id.</param>
                                    ///<param name="resourceField" type="Office.ProjectResourceFields">Resource Field.</param>
                                    ///<param name="fieldValue" type="Object">Either a string, number boolean or object for the data that you want to set.</param>
                                    ///<param name="callback" type="function" optional="true">The optional callback method</param>
                            }
                        }
                    }
                }
            }
        }
    }
});

// Setup outlook
Office._processItem(Office, {
    metaOnly: true,
    conditions: {
        hosts: ["outlook", "outlookcompose"],
        reqs: ["set Mailbox GE 1.1"]
    },
    contents: {
        MailboxEnums: {
            value: new Office._MailboxEnums()
        },
        context: {
            contents: {
                mailbox: {
                    value: new Office._context_mailbox()
                },
                roamingSettings: {
                    value: new Office._settings()
                }
            }
        },
        cast: {
            value: {
                item: new Office._cast_item()
            }
        }
    }
})

// Setup CustomXMLParts
Office._addEnumOnObject("CustomXmlNodeType",
    {
        ///<field type="String">Element</field>
        Element: "element",
        ///<field type="String">Attribute</field>
        Attribute: "attribute",
        ///<field type="String">String/field>
        Text: "text",
        ///<field type="String">CData</field>
        Cdata: "cdata",
        ///<field type="String">ProcessingInstruction</field>
        ProcessingInstruction: "processingInstruction",
        ///<field type="String">NodeComment</field>
        NodeComment: "nodeComment",
        ///<field type="String">NodeDocument</field>
        NodeDocument: "nodeDocument"
    },
    Office,
    {
        hosts: ["word"]
    }
);

// Other enumerations on Office
Office._addEnumOnObject("AsyncResultStatus",
    {
        ///<field type="String">Operation failed, check error object</field>
        Failed: "failed",
        ///<field type="String">Operation succeeded</field>
        Succeeded: "succeeded"

    },
    Office,
    {
        hosts: ["not outlook; not outlookcompose"]
    }
);

Office._processItem(Office,
    {
        contents: {
            Text: {
                conditions: {
                    hosts: ["excel", "word"],
                    reqs: ["set TextBindings GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Text based Binding</field>
                    Text: undefined
                },
                value: "text"
            },
            Matrix: {
                conditions: {
                    hosts: ["excel", "word"],
                    reqs: ["set MatrixBindings GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Matrix based Binding</field>
                    Matrix: undefined
                },
                value: "matrix"
            },
            Table: {
                conditions: {
                    hosts: ["excel", "word", "accesswebapp"],
                    reqs: ["set TableBindings GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Table based Binding</field>
                    Table: undefined
                },
                value: "table"
            }
        }
    },
    "BindingType"
);

Office._processItem(Office,
    {
        contents: {
            Table: {
                conditions: {
                    hosts: ["word", "excel", "accesswebapp"],
                    reqs: ["set TableCoercion GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Coerce as Table</field>
                    Table: undefined
                },
                value: "table"
            },
            Text: {
                conditions: {
                    hosts: ["excel", "ppt", "project", "word"],
                    reqs: ["set TextCoercion GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Coerce as Text</field>
                    Text: undefined
                },
                value: "text"
            },
            Matrix: {
                conditions: {
                    hosts: ["excel", "word"],
                    reqs: ["set MatrixCoercion GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Coerce as Matrix</field>
                    Matrix: undefined
                },
                value: "matrix"
            },
            Html: {
                conditions: {
                    hosts: ["word"],
                    reqs: ["set HtmlCoercion GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Coerce as HTML</field>
                    Html: undefined
                },
                value: "html"
            },
            Ooxml: {
                conditions: {
                    hosts: ["word"],
                    reqs: ["set OoxmlCoercion GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Coerce as Office Open XML</field>
                    Ooxml: undefined
                },
                value: "ooxml"
            },
            SlideRange: {
                conditions: {
                    hosts: ["ppt"]
                },
                annotate: {
                    ///<field type="String">Coerce as JSON object containing an array of the ids, titles, and indexes of the selected slides.</field>
                    SlideRange: undefined
                },
                value: "slideRange"
            }
        }
    },
    "CoercionType"
);

Office._addEnumOnObject("DocumentMode",
    {
        ///<field type="String">Document in Read Only Mode</field>
        ReadOnly: "readOnly",
        ///<field type="String">Document in Read/Write Mode</field>
        ReadWrite: "readWrite"
    },
    Office,
    {
        hosts: ["word", "excel", "accesswebapp"]
    }
);

Office._addEnumOnObject("EventType",
    {
        ///<field type="String">Triggers when a document level selection happens</field>
        DocumentSelectionChanged: "documentSelectionChanged",
        ///<field type="String"> Triggers when a binding level selection happens</field>
        BindingSelectionChanged: "bindingSelectionChanged",
        ///<field type="String">Triggers when a binding level data change happens</field>
        BindingDataChanged: "bindingDataChanged",
        ///<field type="String">Triggers when settings change in a co-Auth session.</field>
        SettingsChanged: "settingsChanged",
        ///<field type="String">Triggers when a customXmlPart node was deleted</field>
        NodeDeleted: "nodeDeleted",
        ///<field type="String">Triggers when a customXmlPart node was inserted</field>
        NodeInserted: "nodeInserted",
        ///<field type="String">Triggers when a customXmlPart node was replaced</field>
        NodeReplaced: "nodeReplaced",
        ///<field type="String">Triggers when a Task selection happens in Project.</field>
        TaskSelectionChanged: "taskSelectionChanged",
        ///<field type="String"> Triggers when a Resource selection happens in Project.</field>
        ResourceSelectionChanged: "resourceSelectionChanged",
        ///<field type="String">Triggers when a View selection happens in Project.</field>
        ViewSelectionChanged: "viewSelectionChanged"
    },
    Office,
    {
        hosts: ["not outlook; not outlookcompose"]
    }
);
// EventType augmentations
Office._processContents(Office.EventType, {
    ActiveViewChanged: {
        conditions: {
            hosts: ["ppt"]
        },
        annotate: {
            ///<field type="String">Occurs when the user changes the current view of the document.</field>
            ActiveViewChanged: undefined
        },
        value: "activeViewChanged"
    }
});

Office._processItem(Office,
    {
        conditions: { hosts: ["not outlook; not outlookcompose; not accesswebapp"] },
        contents: {
            Compressed: {
                conditions: {
                    hosts: ["ppt", "word"],
                    reqs: ["set CompressedFile GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Returns the file as a byte array </field>
                    Compressed: undefined
                },
                value: "compressed"
            },
            Pdf: {
                conditions: {
                    hosts: ["ppt", "word"],
                    reqs: ["set PdfFile GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Returns the file in PDF format as a byte array</field>
                    Pdf: undefined
                },
                value: "pdf"
            },
            Text: {
                conditions: {
                    hosts: ["word"],
                    reqs: ["set TextFile GE 1.1"]
                },
                annotate: {
                    ///<field type="String">Returns the file as plain text</field>
                    Text: undefined
                },
                value: "text"
            }
        }
    },
    "FileType"
);

Office._addEnumOnObject("FilterType",
    {
        ///<field type="String">Returns all items</field>
        All: "all",
        ///<field type="String">Returns only visible items</field>
        OnlyVisible: "onlyVisible"
    },
    Office,
    {
        hosts: ["not outlook; not outlookcompose; not accesswebapp"]
    }
);

Office._addEnumOnObject("InitializationReason",
    {
        ///<field type="String">Indicates the app was just inserted in the document /field>
        Inserted: "inserted",
        ///<field type="String">Indicated if the extension already existed in the document</field>
        DocumentOpened: "documentOpened"
    },
    Office,
    {
        hosts: ["not outlook; not outlookcompose"]
    }
);

Office._addEnumOnObject("ValueFormat",
    {
        ///<field type="String">Returns items with format</field>
        Formatted: "formatted",
        ///<field type="String">Returns items without format</field>
        Unformatted: "unformatted"
    },
    Office,
    {
        hosts: ["not outlook; not outlookcompose"]
    }
);

Office._processContents(Office, {
    GoToType: {
        contents: {
            Binding: {
                conditions: {
                    hosts: ["excel", "word"]
                },
                annotate: {
                    ///<field type="String">Goes to a binding object using the specified binding id.</field>
                    Binding: undefined
                },
                value: "binding"
            },
            NamedItem: {
                conditions: {
                    hosts: ["excel"]
                },
                annotate: {
                    /// <field type="String">
                    /// Goes to a named item using that item's name.
                    /// &#10; In Excel, you can use any structured reference for a named range or table: "Worksheet2!Table1"
                    /// </field>
                    NamedItem: undefined
                },
                value: "namedItem"
            },
            Slide: {
                conditions: {
                    hosts: ["ppt"]
                },
                annotate: {
                    ///<field type="String">Goes to a slide using the specified id.</field>
                    Slide: undefined
                },
                value: "slide"
            },
            Index: {
                conditions: {
                    hosts: ["ppt"]
                },
                annotate: {
                    ///<field type="String">Goes to the specified index by slide number or enum Office.Index</field>
                    Index: undefined
                },
                value: "index"
            }
        }
    }
});

Office._addEnumOnObject("Index",
    {
        First: "first",
        Last: "last",
        Next: "next",
        Previous: "previous"
    },
    Office,
    {
        hosts: ["ppt"]
    }
);

Office._addEnumOnObject("SelectionMode",
    {
        Default: "default",
        Selected: "selected",
        None: "none"
    },
    Office,
    {
        hosts: ["word"]
    }
);

if (!!intellisense) {
    intellisense.addEventListener('statementcompletion', function (event) {
        if (event.targetName === "this" || event.target === undefined || event.target === window) return;
        event.items = event.items.filter(function (item) {
            return !(item.name && item.name.charAt(0) === "_");
        });
    });
}

Office._processContents(Office, Office._items);

document.addEventListener("DOMContentLoaded", function () {
    Office.initialize();
});