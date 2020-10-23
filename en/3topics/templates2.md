

    Docs »
    Template Language

Template Language

    Page construction
    V-Style template language
    V-Style function classification
    V-Style function references
    App styles for mobile devices

Page construction

Weaver's Integrated Development Environment (IDE) is created using React, a JavaScript library. It has a page editor and a visual page designer. Pages are basic parts of an application, which are used to retrieve and display data from tables, create forms for receiving user input data, pass data to contracts, and navigate between application pages. Like contracts, pages are stored in the blockchain, which can ensure they are tamper-proof when loaded in the software client.
Template engine

Page elements (pages and menus) are formed by developers in the template engine of a verification node using the template language in Weaver's page editor. All pages are constructed using the V-Style language developed by IBAX's development team. Use content/... API commands to request pages from nodes on the network. What the template engine sent as a response to this type of request is not an HTML page, but a JSON code composed of HTML tags that form a tree in accordance with the template structure. If you want to test the template engine, you can refer to the content API command.
Create pages

You can use the page editor to create and edit pages, which can be found in the Pages section of Weaver's management tool. The editor can be used to:

    Write the page code, highlight the keywords of the V-Style template language;
    Select and display menus on pages;
    Edit the menu page;
    Configure the permission to change pages, by specifying the contract name with permission in the ContractConditions function, or by directly specifying the access permission in Change conditions;
    Start the visual page designer;
    Preview pages.

Visual page designer

The visual page designer can be used to create page layouts without using interface codes in the V-Style language. With it, you can set the position of form elements and text on pages by dragging and dropping such elements, and configure the size of page blocks. It provides a set of ready-to-use blocks for presenting standard data models: with titles, forms and information panels. After creating a page in the visual page designer, you can write program logic for receiving data and conditional structure in the page editor. In the future, we plan to create a visual page designer with additional functions.
Applicable styles

By default, pages are presented with Angular's Bootstrap Angle style. Users can create their own styles according to needs. The style is stored in the style parameter stylesheet in the ecosystem parameter table.
Page module

To use a code block in multiple pages, you can create a page module to hold and embed it into the page code. Page modules can be created and edited in Weaver's Module Blocks. Like pages, editing permissions can be defined.
Language resource editor

Weaver includes a mechanism for page localization using a function LangRes of the V-Style template language. It could replace language resource tags on the page with text lines corresponding to the language selected by the user in the software client or browser. You can use the short syntax $lable$ instead of the LangRes function. The translation of messages in popups initiated by the contract is performed by V-Logic's LangRes function.

You can create and edit language resources in the Language resources section of Weaver. A language resource consists of label names and corresponding translation of such name in different languages, as well as the corresponding two-letter language identifier (EN, ZH, JP, etc.).

The permissions for adding and changing language resources can be defined in the same way as other tables.
V-Style template language

V-Style functions provide the following operations:

    Retrieving values from the database: DBFind, showing data retrieved from the database as tables and charts;
    Data operations for assigning and displaying variable values: SetVar, GetVar, Data;
    Displaying and comparing date/time values: DateTime, Now, CmpTime;
    Use various user data input fields to build forms: Form, ImageInput, Input, RadioGroup, Select;
    Verify the data in the form field by displaying error messages: Validate, InputErr;
    Displaying the navigation elements: AddToolButton, LinkPage, Button;
    Calling contracts: Button;
    Creating HTML page layout elements, including various tags, and choosing specific css classes: Div, P, Span, etc;
    Embedding and unloading images onto pages: Image, ImageInput;
    Displaying conditions of page layout fragment: If, ElseIf, Else;
    Creating multi-level menus;
    Page localization.

V-Style overview

The V-Style page template language is a functional language that allows a function calling another function FuncName(parameters) and nesting functions into each other. You can specify parameters without quotes, and delete unnecessary parameters.

If the parameter contains a comma, it should be enclosed in quotes (backquotes or double quotes). If a function can only have one parameter, you can use a comma without quotes. In addition, if the parameter has an unpaired closing parenthesis, quotes should be used.

If you put a parameter in quotes, but the parameter itself contains quotes, you can use different types of quotes or multiple quotes in the text.

In the function definition, each parameter has a specific name. You can call the function and specify the parameters in the order of declaration, or any parameter set in any order of name: Parameter_name: Parameter_value. Using this method, you can safely add new function parameters without breaking compatibility with the current template:

Functions can return texts, generate HTML elements (e.g. Input), or create HTML elements with nested HTML elements (Div, P, Span). In the latter case, a parameter with the predefined name Body is used to define the nested element. For example, nesting two divs in another div looks like this:

To define the nested elements described in the Body parameter, the following notation can be used: FuncName(...){...}. Nested elements should be specified with braces:

If you need to specify the same function multiple times in succession, you can use the dot . instead of writing its name every time. For example, the following are the same:

With this language, you can assign a variable with the SetVar function and refer its value with #name#.

To refer to the language resources of the ecosystem, you can use $langres$, where langres is the language name.

The following variables are predefined:

    #key_id# - Account address of the current user;
    #ecosystem_id# - Current ecosystem ID;
    #guest_key# -  Address of the guest account;
    #isMobile# - 1, if Weaver runs on a mobile device.

Use PageParams to pass parameters to pages

Many functions support the PageParams parameter, which is used to pass parameters when redirecting to a new page. For example: PageParams: "param1=value1,param2=value2". The parameter value can be a simple string or a variable with a reference value. When passing parameters to pages, a variable with the parameter name is created, e.g. #param1# and #param2#.

    PageParams: "hello=world" - The new page receives the hello parameter with world as the value;
    PageParams: "hello=#world#" - The new page receives the hello parameter with the value of the world variable.

In addition, the Val function can get data from forms, which is specified in the redirection.

    PageParams: "hello=Val(world)" - The new page receives the hello parameter with the value of the world form element.

Calling contracts

V-Style implements contract calls by clicking the Button function in a form. Once an event is triggered, the data entered by the user in a form field on the page will be passed to the contract. If the form field name corresponds to the variable name in the data section of the contract called, the data will be automatically transferred. The Button function allows to open a modal window for the user to verify the contract execution, and initiate the redirection to the specified page when the contract is successfully executed, and pass certain parameters to the page.
V-Style function classification
Operations on variables: 

|

    GetVar

 |

    SetVar

 |

    VarAsIs

 |
Navigational operations: 

|

    AddToolButton

 |

    Button

 |

    LinkPage

 |
Data manipulation: 

|

    Calculate
    CmpTime

 |

    DateTime

 |

    Money

 |
Data presentation: 

|

    Code
    CodeAsIs
    Chart
    ForList

 |

    Hint
    Image
    MenuGroup

 |

    MenuItem
    QRcode
    Table

 |
Accepting of data: 

|

    Address
    AddressToId
    AppParam
    Data
    DBFind

 |

    EcosysParam
    GetHistory
    GetColumnType
    JsonToSource
    ArrayToSource

 |

    LangRes
    Range
    SysParam
    Binary
    TransactionInfo

 |
Data formatting elements: 

|

    Div
    Em
    P

 |

    SetTitle
    Label

 |

    Span
    Strong

 |
Form elements: 

|

    Form
    ImageInput
    Input

 |

    InputErr
    RadioGroup
    Select

 |

    InputMap
    Map

 |
Operations on code blocks: 

|

    If
    And

 |

    Or

 |

    Include

 |
V-Style function references
Address

This function returns the wallet address xxxx-xxxx-...-xxxx of a specific account address; if no address is specified, the account address of the current user will be used as the parameter.
Syntax

Address(account)

Address

Account

Account address.
Example
AddressToId

It returns the account address of a specific wallet address xxxx-xxxx-...-xxxx.
Syntax

AddressToId(Wallet)

AddressToId

Wallet

The wallet address in XXXX-...-XXXX format.
Example
AddToolButton

Create a button panel with an addtoolbutton element.
Syntax

AddToolButton(Title, Icon, Page, PageParams)
    [.Popup(Width, Header)]

AddToolButton

Title

Button title.

Icon

Button icon style.

Page

Name of the page redirects to.

PageParams

The parameters passed to the page.

Popup

The modal window pops up.

Header

Title of the window.

Width

Percentage of window width.

Its range is 1 to 100.
Example
And

It returns the result of an and logical operation. All parameters listed in parentheses are separated by commas. If one of the parameters is an empty string, zero or false, the parameter value is false, otherwise the parameter value is true. If the parameter value is true, the function returns 1, otherwise it returns 0.
Syntax

And(parameters)
Example
AppParam

Output the application parameter value, which is taken from the app_params table of the current ecosystem. If there is a language resource with the specified name, its value will be automatically replaced.
Syntax

AppParam(App, Name, Index, Source)

AppParam

App

Application ID.

Name

Parameter name.

Index

It can be used when the parameter value is a comma-separated list.

The parameter elements index, starting from 1. For example, if type = full,light, then AppParam(1, type, 2) returns light.

It cannot be used in conjunction with the Source parameter.

Source

It can be used when the parameter value is a comma-separated list.

Create a data object whose elements are the values of specific parameters. This object can be used as a data source for the Table and Select functions.

It cannot be used in conjunction with the Index parameter.
Example
ArrayToSource

Create an arraytosource element and fill it with the key-value pairs of a JSON array. The data obtained is put into the Source element, which can be used later in the source input function (e.g. Table).
Syntax

ArrayToSource(Source, Data)

ArrayToSource

Source

Data source name.

Data

A JSON array or a variable name containing a JSON array (#name#).
Example
Binary

Returns links to static files stored in the binary table binaries.
Syntax

Binary(Name, AppID, MemberID)[.ById(ID)][.Ecosystem(ecosystem)]

Binary

Name

File name.

AppID

Application ID.

MemberID

Account address, 0 by default.

ID

Static file ID.

Ecosystem

Ecosystem ID. If it is not specified, the binary file is requested from the current ecosystem.
Example
Button

Create a button HTML element which will create a button to call a contract or open a page.
Syntax

Button(Body, Page, Class, Contract, Params, PageParams)
    [.CompositeContract(Contract, Data)]
    [.Alert(Text, ConfirmButton, CancelButton, Icon)]
    [.Popup(Width, Header)]
    [.Style(Style)]
    [.ErrorRedirect((ErrorID,PageName,PageParams)]

Button

Body

Child text or element.

Page

Name of the page redirects to.

Class

Button class.

Contract

Name of the contract called.

Params

The list of values passed to the contract. Normally, the value of the contract parameter (the data section) is obtained from an HTML element (such as an input field) of id with a similar name. If the element id is different from the name of the contract parameter, then the value should be assigned in the format of contractField1=idname1, contractField2=idname2. This parameter is returned to attr as the object {contractField1: idname1, contractField2: idname2}.

PageParams

The format of parameters passed to the redirect page is pageField1=idname1, pageField2=idname2. Variables with target page parameter names #pageField1 and #pageField2 are created on the target page and assigned the specified values. See more specifications for parameter passing Use PageParams to pass parameters to pages).

CompositeContract

Used to add additional contracts to the button. CompositeContract can be used multiple times.

Name

Name of the contract.

Data

The contract parameters are JSON arrays.

Alert

Display the message.

Text

Text of the message.

ConfirmButton

Title of the Confirm button.

CancelButton

Title of the Cancel button.

Icon

Button icon.

Popup

Output modal window.

Header

Window title.

Width

Percentage of window width.

Its range is 1 to 100.

Style

The CSS style specified.

Style

CSS style.

ErrorRedirect

Specify and redirect to a page when the :ref:contractfundef-Throw function generates an error during contract execution. There can be several ErrorRedirect calls. Therefore, when returning the *errredirect* attribute, the attribute key is ErrorID and the value is the parameters list.

ErrorID

Error ID.

PageName

Name of the redirect page.

PageParams

Parameters passed to the page.
Example
Calculate

It returns the result of the arithmetic expression passed in the Exp parameter. The following operations are applicable: +, -, *, / and brackets ().
Syntax

Calculate(Exp, Type, Prec)

Calculate

Exp

An arithmetic expression, containing numbers and the #name# variable.

Type

Result data type: int, float, money. If not specified, it is float if there is a number with a decimal point, otherwise it is int.

Prec

float and money data, with two significant digits after the decimal point.
Example
Chart

Create HTML charts.
Syntax

Chart(Type, Source, FieldLabel, FieldValue, Colors)

Chart

Type

Chart type.

Source

Name of the data source, e.g., obtained from the DBFind function.

FieldLabel

Name of the header field.

FieldValue

Name of the value field.

Colors

List of colors.
Example
CmpTime

It compares two time values in the same format.

It supports unixtime, YYYY-MM-DD HH:MM:SS and any time format, such as YYYYMMDD.
Syntax

CmpTime(Time1, Time2)
Return value

    -1 - Time1 <Time2;
    0 - Time1 = Time2;
    1 - Time1> Time2.

Example
Code

Create a code element to display the specified code.

It substitute a variable with the value of the variable (for example, #name#).
Syntax

Code(Text)

Code

Text

Source code.
Example
CodeAsIs

Create a code element to display the specified code.

It does not replace a variable with its value. For example, #name# will be displayed as is.
Syntax

CodeAsIs(Text)

CodeAsIs

Text

Source code.
Example
Data

Create a data element, fill it with the specified data and put it in Source. Then, you can receive Source as a data input in Table and other functions. The sequence of column names corresponds to the sequence of data entry values.
Syntax

Data(Source,Columns,Data)
    [.Custom(Column){Body}]

Data

Source

Name of the data source. You can specify any name that will be passed to other functions later as a data source.

Columns

A list of column names, separated by commas.

Data

Data set.

One record per line. Column values must be separated by commas. Data and Columns should be set in the same order.

Values with commas should be enclosed in double quotes ("example1, example2", 1, 2). Quoted values should be put in two double quotes ("""example", "example2""", 1, 2).

Custom

You can assign calculated columns to Data. For example, you can specify field templates for buttons and other page layout elements. These field templates are usually assigned to Table and other functions to receive data.

Use multiple Custom functions if you want to assign multiple calculated columns.

Column

Column name, which is unique and compulsory.

Body

Code block. You can use #columnname# to get values from other columns in the entry, and then use those values in code blocks.
Example
DateTime

Display the time and date in the specified format.
Syntax

DateTime(DateTime, Format)

DateTime

DateTime

Time and date expressed in unixtime or standard format 2006-01-02T15:04:05.

Format

Format template: year in 2-digit format YY, 4-digit format YYYY, month in MM, day in DD, hour in HH, minute in MM, second in SS, e.g.: YY/MM/DD HH:MM.

If it is not specified or missing, YYYY-MM-DD HH:MI:SS will be used.
Example
DBFind

Create a dbfind element, fill it with the data of the table table and put it in the Source structure, which can later be used for the input data of Table and other functions Source.
Syntax

DBFind(table, Source)
    [.Columns(columns)]
    [.Where(conditions)]
    [.WhereId(id)]
    [.Order(name)]
    [.Limit(limit)]
    [.Offset(offset)]
    [.Count(countvar)]
    [.Ecosystem(id)]
    [.Cutoff(columns)]
    [.Custom(Column){Body}]
    [.Vars(Prefix)]

DBFind

table

Table name.

Source

Data source name.

Columns

columns

If not specified, a list of all fields will be returned. If there is a JSON type field, you can use the following syntax to process the record field: columnname->fieldname. In this case, the field name generated is columnname.fieldname.

Where

conditions

Data query conditions. See DBFind.

If there is a JSON type field, you can use the following syntax to process the record field: columnname->fieldname.

WhereId

Query by ID, e.g. .WhereId(1).

Id

Entry ID.

Order

Sort by field.

For more information about the sorting syntax, see DBFind.

name

Field Name

Limit

limit

The number of entries returned, 25 by default. The maximum number is 10,000.

Offset

Offset

Offset.

Count

Specify the total number of rows of the Where condition.

In addition to storing it in a variable, the total count is returned in the count parameter of the dbfind element.

If Where and WhereID are not specified, the total count of rows in the table will be returned.

countvar

Name of the variable that holds the row count.

Ecosystem

Id

Ecosystem ID. By default, the data comes from the specified table in the current ecosystem.

Cutoff

Used to cut and display large amounts of text data.

columns

A comma-separated list of fields that must be processed by the Cutoff function.

The field value will be replaced by a JSON object that has two fields: link link and title title. If the field value contains more than 32 characters, link pointing to the first 32 characters of the full text is returned. If the field value contains 32 characters or less, link is set to void and title contains the complete field value.

Custom

You can assign calculated columns to Data. For example, you can specify field templates for buttons and other page layout elements. These field templates are usually assigned to Table and other functions to receive data.

If you want to assign multiple calculated columns, use multiple Custom functions.

Column

Column name, which is unique and compulsory.

Body

Code block. You can use #columnname# to get values from other columns in the entry, and then use those values in code blocks.

Vars

The first row obtained by the query will generate a set of variables with values. When it is specified, the Limit parameter automatically becomes 1, and only one (1) record is returned.

Prefix

The prefix added to the variable name. Its format is #prefix_columnname#, where the column name immediately follows the underscore symbol. If there is a column containing a JSON field, the variable generated will be in the following format: #prefix_columnname_field#.
Example
Div

Create a div HTML element.
Syntax

Div(Class, Body)
    [.Style(Style)]
    [.Show(Condition)]
    [.Hide(Condition)]

Div

Class

Class name of the div.

Body

Child element.

Style

The CSS style specified.

Style

CSS style.

Show

    Define the conditions for displaying Div.

Condition

See Hide below.

Hide

Define the conditions for hiding Div.

Condition

The expression format is InputName=Value, when all expressions are true, Condition is true, and when the value of InputName is equal to Value, Condition is true. If multiple Show or Hide are called, there must be at least one Condition parameter is true.
Example
EcosysParam

This function obtains parameter values from the ecosystem parameter table of the current ecosystem. If the returned result name contains the language resources, it will be translated accordingly.
Syntax

EcosysParam(Name, Index, Source)

EcosysParam

Name

Parameter name.

Index

If the requested parameter is a list of comma-separated elements, you can specify an index starting from 1. For example, if gender = male,female, then gender = male,female returns female.

It cannot be used in conjunction with the Source parameter.

Source

It can be used when the parameter value is a comma-separated list.

Create a data object whose elements are the values of the specified parameters. This object can be used as a data source for the Table and Select functions.

It cannot be used in conjunction with the Index parameter.
Em

Create an em HTML element.
Syntax

Em(Body, Class)

Em

Body

Child text or element.

Class

The em class name.
Example
ForList

Display the list of elements in the Source data source in the template format set in Body and create a forlist element.
Syntax

ForList(Source, Index){Body}

ForList

Source

Data source obtained from the DBFind or Data function.

Index

The variable of the iteration counter, starting from 1.

An optional parameter. If not specified, the iteration count value will be written to the [Source] _index variable.

Body

Template for inserting elements.
Form

Create a form HTML element.
Syntax

Form(Class, Body) [.Style(Style)]

Form

Body

Child text or element.

Class

Class name of the form.

Style

The CSS style specified.

Style

CSS style.
Example
GetColumnType

Returns the field data type of a specific table.

Types returned include: text, varchar, number, money, double, bytes, json, datetime, double.
Syntax

GetColumnType(Table, Column)

GetColumnType

Table

Table name.

Column

Field name.
Example
GetHistory

Create a gethistory element and fill it with the history change records of the entries in the specified table. The data generated will be placed in the Source element, which can be used later in the source input function (for example, Table).

The array is sorted in order from the last modified.

The id field in the array points to the id of the rollback_tx table. block_id represents the block ID, block_time represents the block generation timestamp.
Syntax

GetHistory(Source, Name, Id, RollbackId)

GetHistory

Source

Data source name.

Name

Table name.

Id

Entry ID.

RollbackId

An optional parameter. If specified, only one record with the specified ID will be returned from the rollback_tx table.
Example
GetVar

It returns the value of the specified variable that already exists, or an empty string if it does not exist.

The getvar element is only created when an editable tree is requested. The difference between GetVar(varname) and #varname is that if varname does not exist, GetVar will return an empty string, while #varname# will be interpreted as a string value.
Syntax

GetVar(Name)

GetVar

Name

Variable name.
Example
Hint

Create a hint element for hints.
Syntax

Hint(Icon,Title,Text)

Hint

Icon

Icon name.

Title

Hint title.

Text

Hint text.
Example
If

Condition statement.

Returns the first If or ElseIf child element that satisfies Condition. Otherwise, return the Else child element.
Syntax

If(Condition){ Body}
    [.ElseIf(Condition){ Body }]
    [.Else{ Body }]

If

Condition

If the condition is equal to an empty string, 0 or false, it is considered that the condition is not met. In all other cases, this condition is considered to be satisfied.

Body

Child element.
Example
Image

Create a image HTML element.
Syntax

Image(Src, Alt, Class)
    [.Style(Style)]

Image

Src

Image source, file or data:...

Alt

Alternative text when the image cannot be displayed.

Сlass

Image class name.
Example
ImageInput

Create an imageinput element to upload an image.
Syntax

ImageInput(Name, Width, Ratio, Format)

ImageInput

Name

Element name.

Width

Width of the cropped image.

Ratio

Aspect ratio or image height.

Format

The format of the uploaded image.
Example
Include

Insert the template with a specified name into the page code.
Syntax

Include(Name)

Include

Name

Template name.
Example
Input

Create an input HTML element.
Syntax

Input(Name, Class, Placeholder, Type, Value, Disabled)
    [.Validate(validation parameters)]
    [.Style(Style)]

Input

Name

Element name.

Class

Class name.

Placeholder

Prompt for the expected value of the input field.

Type

input type.

Value

Element value.

Disabled

Disable the input element.

Validate

Validate the parameter.

Style

The CSS style specified.

Style

CSS style.
Example
InputErr

Create an inputerr element to validate the error text.
Syntax

InputErr(Name,validation errors)]

InputErr

Name

Corresponds to the name of the Input element.

validation errors

Validation error message for one or more parameters.
Example
InputMap

Create an text input field for address, able to select coordinates on the map.
Syntax

InputMap(Name, Type, MapType, Value)

InputMap

Name

Element name.

Value

Default value.

The value is an object in string format. For example, {"coords":[{"lat":number,"lng":number},]} or {"zoom":int, "center":{"lat":number,"lng": number}}. When the InputMap is created with the predefined Value, the address field can be used to save the address value, so the it is not void.

Type

Type of map spot mapping:

        polygon - indicates the area of a multi-spot closed loop;
        Line - means a polyline with multiple points without closed loop;
        Point - indicates a single point coordinate.

MapType

Map type.

It has the following values: hybrid, roadmap, satellite, terrain.
Example
JsonToSource

Create a jsontosource element and fill it with the key-value pairs of a JSON array. The data obtained is put into the Source element, which can be used later in the source input function (e.g. Table).

The records in the result data are sorted alphabetically by JSON key.
Syntax

JsonToSource(Source, Data)

JsonToSource

Source

Data source name.

Data

A JSON object or a variable name containing a JSON object (#name#).
Example
Label

Create a label HTML element.
Syntax

Label(Body, Class, For)
    [.Style(Style)]

Label

Body

Child text or element.

Class

Class name.

For

Bind to a form element.

Style

The CSS style specified.

Style

CSS style.
Example
LangRes

Returns a specific language resource. If requested to edit the tree, the langres element is returned, and you may use the short format symbol $langres$.
Syntax

LangRes(Name)

LangRes

Name

Name of the language resource.
Example
LinkPage

Create a linkpage element, linking to the page.
Syntax

LinkPage(Body, Page, Class, PageParams)
    [.Style(Style)]

LinkPage

Body

Child text or element.

Page

Name of the redirect page.

Class

Button class name.

PageParams

Redirect page parameters.

Style

The CSS style specified.

Style

CSS styles
Example
Map

Create a visual map and display coordinates in any format.
Syntax

Map(Hmap, MapType, Value)

Map

Hmap

Height of an HTML element on the page.

The default value is 100.

Value

Map value, an object in string format.

For example, {"coords":[{"lat":number,"lng":number},]} or {"zoom":int, "center":{"lat":number,"lng": number}}. If center is not specified, the map window will automatically adjust according to the specified coordinates.

MapType

Map type.

It has the following values: hybrid, roadmap, satellite, terrain.
Example
MenuGroup

Create a nested submenu in the menu and return the menugroup element. Before replacing it with the language resource, the name parameter will return the value of Title.
Syntax

MenuGroup(Title, Body, Icon)

MenuGroup

Title

Name of the menu item.

Body

Child elements in a submenu.

Icon

Icon.
Example
MenuItem

Create a menu item and return the menuitem element.
Syntax

MenuItem(Title, Page, Params, Icon)

MenuItem

Title

Name of the menu item.

Page

Name of the redirect page.

Params

Redirect page parameters.

Icon

Icon.
Example
Money

Returns the string value of exp / 10 ^ digit.
Syntax

Money(Exp, Digit)

Money

Exp

A number in string format.

Digit

The exponent of 10 in the expression Exp/10^digit. The value can be positive or negative, and a positive value determines the number of digits after the decimal point.
Example
Or

It returns the result of an if logical operation. All parameters listed in parentheses are separated by commas. If having one parameter that is value is not an empty string, zero or false, the parameter value is true, otherwise the parameter value is false. If the parameter value is true, the function returns 1, otherwise it returns 0.
Syntax

Or(parameters)
Example
P

Create a p HTML element.
Syntax

P(Body, Class)
    [.Style(Style)]

P

Body

Child text or element.

Class

Class name.

Style

The CSS style specified.

Style

CSS style.
Example
QRcode

Returns the QR code with the specified text and create a qrcode element.
Syntax

QRcode(Text)

QRcode

Text

QR code text.
Example
RadioGroup

Create a radiogroup element.
Syntax

RadioGroup(Name, Source, NameColumn, ValueColumn, Value, Class)
    [.Validate(validation parameters)]
    [.Style(Style)]

RadioGroup

Name

Element name.

Source

Data source obtained from the DBFind or Data function.

NameColumn

Field name of the data source.

ValueColumn

Value name of the data source.

Fields created with Custom cannot be used in this parameter.

Value

Default value.

Class

Class name.

Validate

Validate the parameter.

Style

The CCS style specified.

Style

CSS style.
Example
Range

Create a range element, use step size Step from From to To (not including To) to fill integer elements. The data generated will be put into Source and can be used later in the function of the source input (e.g. Table). If an invalid parameter is specified, an empty Source is returned.
Syntax

Range(Source,From,To,Step)

Range

Source

Data source name.

From

Starting value (i = From).

To

End value (i <To).

Step

Step of value change. If it is not specified, the default value is 1.
Example
Select

Create a select HTML element.
Syntax

Select(Name, Source, NameColumn, ValueColumn, Value, Class)
    [.Validate(validation parameters)]
    [.Style(Style)]

Select

Name

Element name.

Source

Data source obtained from the DBFind or Data function.

NameColumn

Field name of the data source.

ValueColumn

Value name of the data source.

Fields created with Custom cannot be used in this parameter.

Value

Default value.

Class

Class name.

Validate

Validate the parameter.

Style

The CCS style specified.

Style

CSS style.
Example
SetTitle

To set the page title and create a settitle element.
Syntax

SetTitle(Title)

SetTitle

Title

Page title.
Example
SetVar

Assign the value Value to the specified variable Name.
Syntax

SetVar(Name, Value)

SetVar

Name

Variable name.

Value

Variable value, may contain a reference to another variable.
Example
Span

Create a span HTML element.
Syntax

Span(Body, Class)
    [.Style(Style)]

Span

Body

Child text or element.

Class

Class name.

Style

The CCS style specified.

Style

CSS style.
Example
Strong

Create a strong HTML element.
Syntax

Strong(Body, Class)

Strong

Body

Child text or element.

Class

Class name.
Example
SysParam

Get the value of a specific parameter in the platform parameter table system_parameters.
Syntax

SysParam(Name)

SysParam

Name

Name of the platform parameter.
Example
Table

Create a table HTML element.
Syntax

Table(Source, Columns)
    [.Style(Style)]

Table

Source

Name of a specific data source.

Columns

Title and corresponding column name, e.g.: Title1=column1,Title2=column2.

Style

The CSS style specified.

Style

CSS style.
Example
TransactionInfo

It queries transactions by specified hash and returns information about the executed contracts and their parameters.
Syntax

TransactionInfo(Hash)

TransactionInfo

Hash

Transaction hashes in hexadecimal string format.
Return value

It returns a string in JSON format:

    {"contract":"ContractName", "params":{"key": "val"}, "block": "N"}

        Where:

                contract - Contract name;
                params - Data passed to the contract parameters;
                block - ID of the block that processed the transaction.

Example
VarAsIs

Assigns the value Value to a specific variable Name, which is the name of a specific variable instead of its value.

For versions with variable substitution, see SetVar.
Syntax

VarAsIs(Name, Value)

VarAsIs

Name

Variable name.

Value

A variable value. Variable name in the value will not be substituted. For example, if Value is example #varname#, then the variable value is also example #varname#.
Example
App styles for mobile devices
Layout
Title

    h1… h6

Strong-class names

    .text-muted
    .text-primary
    .text-success
    .text-info
    .text-warning
    .text-danger

Color

    .bg-danger-dark
    .bg-danger
    .bg-danger-light
    .bg-info-dark
    .bg-info
    .bg-info-light
    .bg-primary-dark
    .bg-primary
    .bg-primary-light
    .bg-success-dark
    .bg-success
    .bg-success-light
    .bg-warning-dark
    .bg-warning
    .bg-warning-light
    .bg-gray-darker
    .bg-gray-dark
    .bg-gray
    .bg-gray-light
    .bg-gray-lighter

Grid

    .row
    .row.row-table
    .col-xs-1… .col-xs-12, only used in .row.row-table.

Panel

    .panel
    .panel.panel-heading
    .panel.panel-body
    .panel.panel-footer

Form

    .form-control

Button

    .btn.btn-default
    .btn.btn-link
    .btn.btn-primary
    .btn.btn-success
    .btn.btn-info
    .btn.btn-warning
    .btn.btn-danger

Icon

    All fa-class icons are from FontAwesome: fa fa-<icon-name></icon-name>.
    All icon-class icons are from SimpleLineIcons: icon-<icon-name>.

