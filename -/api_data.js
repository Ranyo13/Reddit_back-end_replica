define({ "api": [
  {
    "type": "delete",
    "url": "/comment/:c_id",
    "title": "Delete a Comment",
    "name": "DeleteComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If this user can't delete this comment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "put",
    "url": "/comment/:c_id",
    "title": "Edit a Comment",
    "name": "EditComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Text of the Edited Comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "spoiler",
            "defaultValue": "false",
            "description": "<p>True if it is a Spoiler.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "locked",
            "defaultValue": "false",
            "description": "<p>True if Replies are Disallowed on this Comment.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If this user can't edit this comment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/comment/all/:id",
    "title": "Get Comments or Replies for this ID",
    "name": "GetAllComments",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "comment",
            "defaultValue": "false",
            "description": "<p>True if the ID sent is a Comment ID not a Thread ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "objects[]",
            "optional": false,
            "field": "comments",
            "description": "<p>Array of the comments or replies attached to this thread or comment.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ThreadNotFound",
            "description": "<p>The id of the thread wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If this user can't get info of this comment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/comment/:c_id",
    "title": "Get Details About Comment or a Reply",
    "name": "GetComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Text of the Comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "c_date",
            "description": "<p>Date of the Posted Comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "reply",
            "description": "<p>True if it is a reply.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "spoiler",
            "description": "<p>True if it is a Spoiler.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "locked",
            "description": "<p>True if the Replies are Disallowed on this Comment.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If this user can't get info of this comment.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/comment/:id",
    "title": "Post a New Comment",
    "name": "PostComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of thread or comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Text of the Comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "reply",
            "defaultValue": "false",
            "description": "<p>True if you want to post a reply to a comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "spoiler",
            "defaultValue": "false",
            "description": "<p>True if it is a Spoiler.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "locked",
            "defaultValue": "false",
            "description": "<p>True if Replies are Disallowed on this Comment.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>The Created Comment ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ThreadNotFound",
            "description": "<p>The id of the thread wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If the user isn't logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/comment/report/:id",
    "title": "Report a comment",
    "name": "ReportComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Comment Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>A text containg the reason of the report.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "EmptyText",
            "description": "<p>the text is empty.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If the user isn't logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/comment/save/:c_id",
    "title": "Save a Comment",
    "name": "SaveComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentAlreadySaved",
            "description": "<p>The Comment has already been saved before.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If the user isn't logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "delete",
    "url": "/comment/unsave/:c_id",
    "title": "UnSave a Comment",
    "name": "UnSaveComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentAlreadySaved",
            "description": "<p>You can't unsave an unsaved comment.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If the user isn't logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "type": "put",
    "url": "/comment/vote/:c_id",
    "title": "Vote for a Comment",
    "name": "VoteComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "c_id",
            "description": "<p>Comment Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "0",
              "-1"
            ],
            "optional": false,
            "field": "direction",
            "description": "<p>Direction of the Vote as 1 indicates Upvote, -1 indicates Downvote and 0 means unvoting.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>The id of the comment wasn't found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessDenied",
            "description": "<p>If the user isn't logged in.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Comment"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./-/main.js",
    "group": "D__memestock_backend___main_js",
    "groupTitle": "D__memestock_backend___main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "D__memestock_backend_doc_main_js",
    "groupTitle": "D__memestock_backend_doc_main_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./main.js",
    "group": "D__memestock_backend_main_js",
    "groupTitle": "D__memestock_backend_main_js",
    "name": ""
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/aws-sign2/index.js",
    "group": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "groupTitle": "D__memestock_backend_node_modules_aws_sign2_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/base/index.js",
    "group": "D__memestock_backend_node_modules_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/read.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_read_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_read_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/json.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_types_json_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_types_json_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/raw.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_types_raw_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_types_raw_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/text.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_types_text_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/text.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_types_text_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_types_text_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/body-parser/lib/types/urlencoded.js",
    "group": "D__memestock_backend_node_modules_body_parser_lib_types_urlencoded_js",
    "groupTitle": "D__memestock_backend_node_modules_body_parser_lib_types_urlencoded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/braces/index.js",
    "group": "D__memestock_backend_node_modules_braces_index_js",
    "groupTitle": "D__memestock_backend_node_modules_braces_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/browser_build/bson.js",
    "group": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_browser_build_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/bson/lib/bson/bson.js",
    "group": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "groupTitle": "D__memestock_backend_node_modules_bson_lib_bson_bson_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/busboy/node_modules/isarray/build/build.js",
    "group": "D__memestock_backend_node_modules_busboy_node_modules_isarray_build_build_js",
    "groupTitle": "D__memestock_backend_node_modules_busboy_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/busboy/node_modules/isarray/build/build.js",
    "group": "D__memestock_backend_node_modules_busboy_node_modules_isarray_build_build_js",
    "groupTitle": "D__memestock_backend_node_modules_busboy_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/busboy/node_modules/isarray/build/build.js",
    "group": "D__memestock_backend_node_modules_busboy_node_modules_isarray_build_build_js",
    "groupTitle": "D__memestock_backend_node_modules_busboy_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/busboy/node_modules/isarray/build/build.js",
    "group": "D__memestock_backend_node_modules_busboy_node_modules_isarray_build_build_js",
    "groupTitle": "D__memestock_backend_node_modules_busboy_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/busboy/node_modules/isarray/build/build.js",
    "group": "D__memestock_backend_node_modules_busboy_node_modules_isarray_build_build_js",
    "groupTitle": "D__memestock_backend_node_modules_busboy_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/busboy/node_modules/isarray/build/build.js",
    "group": "D__memestock_backend_node_modules_busboy_node_modules_isarray_build_build_js",
    "groupTitle": "D__memestock_backend_node_modules_busboy_node_modules_isarray_build_build_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cache-base/index.js",
    "group": "D__memestock_backend_node_modules_cache_base_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cache_base_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/class-utils/index.js",
    "group": "D__memestock_backend_node_modules_class_utils_index_js",
    "groupTitle": "D__memestock_backend_node_modules_class_utils_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/commander/index.js",
    "group": "D__memestock_backend_node_modules_commander_index_js",
    "groupTitle": "D__memestock_backend_node_modules_commander_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "D__memestock_backend_node_modules_component_emitter_index_js",
    "groupTitle": "D__memestock_backend_node_modules_component_emitter_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "D__memestock_backend_node_modules_component_emitter_index_js",
    "groupTitle": "D__memestock_backend_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "D__memestock_backend_node_modules_component_emitter_index_js",
    "groupTitle": "D__memestock_backend_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "D__memestock_backend_node_modules_component_emitter_index_js",
    "groupTitle": "D__memestock_backend_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "D__memestock_backend_node_modules_component_emitter_index_js",
    "groupTitle": "D__memestock_backend_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "D__memestock_backend_node_modules_component_emitter_index_js",
    "groupTitle": "D__memestock_backend_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/component-emitter/index.js",
    "group": "D__memestock_backend_node_modules_component_emitter_index_js",
    "groupTitle": "D__memestock_backend_node_modules_component_emitter_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/content-disposition/index.js",
    "group": "D__memestock_backend_node_modules_content_disposition_index_js",
    "groupTitle": "D__memestock_backend_node_modules_content_disposition_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cookie-signature/index.js",
    "group": "D__memestock_backend_node_modules_cookie_signature_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/cookie-signature/index.js",
    "group": "D__memestock_backend_node_modules_cookie_signature_index_js",
    "groupTitle": "D__memestock_backend_node_modules_cookie_signature_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/copy-descriptor/index.js",
    "group": "D__memestock_backend_node_modules_copy_descriptor_index_js",
    "groupTitle": "D__memestock_backend_node_modules_copy_descriptor_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "D__memestock_backend_node_modules_delegates_index_js",
    "groupTitle": "D__memestock_backend_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "D__memestock_backend_node_modules_delegates_index_js",
    "groupTitle": "D__memestock_backend_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "D__memestock_backend_node_modules_delegates_index_js",
    "groupTitle": "D__memestock_backend_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "D__memestock_backend_node_modules_delegates_index_js",
    "groupTitle": "D__memestock_backend_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "D__memestock_backend_node_modules_delegates_index_js",
    "groupTitle": "D__memestock_backend_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/delegates/index.js",
    "group": "D__memestock_backend_node_modules_delegates_index_js",
    "groupTitle": "D__memestock_backend_node_modules_delegates_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/dicer/node_modules/isarray/build/build.js",
    "group": "D__memestock_backend_node_modules_dicer_node_modules_isarray_build_build_js",
    "groupTitle": "D__memestock_backend_node_modules_dicer_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/dicer/node_modules/isarray/build/build.js",
    "group": "D__memestock_backend_node_modules_dicer_node_modules_isarray_build_build_js",
    "groupTitle": "D__memestock_backend_node_modules_dicer_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/dicer/node_modules/isarray/build/build.js",
    "group": "D__memestock_backend_node_modules_dicer_node_modules_isarray_build_build_js",
    "groupTitle": "D__memestock_backend_node_modules_dicer_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/dicer/node_modules/isarray/build/build.js",
    "group": "D__memestock_backend_node_modules_dicer_node_modules_isarray_build_build_js",
    "groupTitle": "D__memestock_backend_node_modules_dicer_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/dicer/node_modules/isarray/build/build.js",
    "group": "D__memestock_backend_node_modules_dicer_node_modules_isarray_build_build_js",
    "groupTitle": "D__memestock_backend_node_modules_dicer_node_modules_isarray_build_build_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/dicer/node_modules/isarray/build/build.js",
    "group": "D__memestock_backend_node_modules_dicer_node_modules_isarray_build_build_js",
    "groupTitle": "D__memestock_backend_node_modules_dicer_node_modules_isarray_build_build_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/etag/index.js",
    "group": "D__memestock_backend_node_modules_etag_index_js",
    "groupTitle": "D__memestock_backend_node_modules_etag_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/expand-brackets/index.js",
    "group": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "groupTitle": "D__memestock_backend_node_modules_expand_brackets_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/express.js",
    "group": "D__memestock_backend_node_modules_express_lib_express_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_express_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/init.js",
    "group": "D__memestock_backend_node_modules_express_lib_middleware_init_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_middleware_init_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/middleware/query.js",
    "group": "D__memestock_backend_node_modules_express_lib_middleware_query_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_middleware_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "D__memestock_backend_node_modules_express_lib_router_layer_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "D__memestock_backend_node_modules_express_lib_router_layer_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/layer.js",
    "group": "D__memestock_backend_node_modules_express_lib_router_layer_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_router_layer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/router/route.js",
    "group": "D__memestock_backend_node_modules_express_lib_router_route_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_router_route_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/express/lib/utils.js",
    "group": "D__memestock_backend_node_modules_express_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_express_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/extglob/index.js",
    "group": "D__memestock_backend_node_modules_extglob_index_js",
    "groupTitle": "D__memestock_backend_node_modules_extglob_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/fragment-cache/index.js",
    "group": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_fragment_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/growl/lib/growl.js",
    "group": "D__memestock_backend_node_modules_growl_lib_growl_js",
    "groupTitle": "D__memestock_backend_node_modules_growl_lib_growl_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jasmine-growl-reporter/node_modules/growl/lib/growl.js",
    "group": "D__memestock_backend_node_modules_jasmine_growl_reporter_node_modules_growl_lib_growl_js",
    "groupTitle": "D__memestock_backend_node_modules_jasmine_growl_reporter_node_modules_growl_lib_growl_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/jsonwebtoken/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_jsonwebtoken_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "D__memestock_backend_node_modules_map_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "D__memestock_backend_node_modules_map_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "D__memestock_backend_node_modules_map_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "D__memestock_backend_node_modules_map_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/map-cache/index.js",
    "group": "D__memestock_backend_node_modules_map_cache_index_js",
    "groupTitle": "D__memestock_backend_node_modules_map_cache_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "D__memestock_backend_node_modules_media_typer_index_js",
    "groupTitle": "D__memestock_backend_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "D__memestock_backend_node_modules_media_typer_index_js",
    "groupTitle": "D__memestock_backend_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "D__memestock_backend_node_modules_media_typer_index_js",
    "groupTitle": "D__memestock_backend_node_modules_media_typer_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "D__memestock_backend_node_modules_media_typer_index_js",
    "groupTitle": "D__memestock_backend_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/media-typer/index.js",
    "group": "D__memestock_backend_node_modules_media_typer_index_js",
    "groupTitle": "D__memestock_backend_node_modules_media_typer_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/micromatch/index.js",
    "group": "D__memestock_backend_node_modules_micromatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_micromatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/mocha.js",
    "group": "D__memestock_backend_node_modules_mocha_mocha_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_mocha_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mocha/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mocha_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose-legacy-pluralize/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_legacy_pluralize_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_legacy_pluralize_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/aggregate.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_aggregate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browserDocument.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browserDocument_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browserDocument_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/browser.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cast.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cast_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cast_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/AggregationCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_AggregationCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/cursor/QueryCursor.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_cursor_QueryCursor_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/document_provider.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_document_provider_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_document_provider_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_collection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/drivers/node-mongodb-native/connection.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_drivers_node_mongodb_native_connection_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/cast.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_cast_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_cast_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/disconnected.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_disconnected_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_disconnected_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/messages.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_messages_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_messages_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/mongooseError.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_mongooseError_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_mongooseError_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/objectExpected.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_objectExpected_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_objectExpected_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/objectParameter.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_objectParameter_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_objectParameter_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/parallelSave.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_parallelSave_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_parallelSave_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/strict.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_strict_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_strict_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/validation.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_validation_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_validation_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/validator.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_validator_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_validator_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/error/version.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_error_version_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_error_version_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/helpers/cursor/eachAsync.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_helpers_cursor_eachAsync_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_helpers_cursor_eachAsync_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/helpers/setDefaultsOnInsert.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_helpers_setDefaultsOnInsert_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_helpers_setDefaultsOnInsert_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/helpers/updateValidators.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_helpers_updateValidators_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_helpers_updateValidators_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/model.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_model_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/promise_provider.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_promise_provider_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_promise_provider_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/promise_provider.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_promise_provider_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_promise_provider_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/promise_provider.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_promise_provider_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_promise_provider_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/query.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_query_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/boolean.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_boolean_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/date.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_date_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/decimal128.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/decimal128.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/decimal128.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/decimal128.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_decimal128_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/mixed.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/mixed.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/mixed.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/mixed.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_mixed_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/number.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_number_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/objectid.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/objectid.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/objectid.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/objectid.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/objectid.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_objectid_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schema/string.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schema_string_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/schematype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_schematype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/array.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_array_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/buffer.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_buffer_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/documentarray.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_documentarray_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/embedded.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_embedded_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/subdocument.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/subdocument.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/subdocument.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/types/subdocument.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_types_subdocument_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/utils.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/utils.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/lib/virtualtype.js",
    "group": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_lib_virtualtype_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mongoose/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_mongoose_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/mquery.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_mquery_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/utils.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/utils.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/utils.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/lib/utils.js",
    "group": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_lib_utils_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/debug.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/mquery/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_mquery_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nanomatch/index.js",
    "group": "D__memestock_backend_node_modules_nanomatch_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nanomatch_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/needle/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_needle_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_needle_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/dist/debug.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_dist_debug_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/browser.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/common.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_common_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_node_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/debug/src/node.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_node_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_debug_src_node_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/nodemon/node_modules/ms/index.js",
    "group": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "groupTitle": "D__memestock_backend_node_modules_nodemon_node_modules_ms_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/object-copy/index.js",
    "group": "D__memestock_backend_node_modules_object_copy_index_js",
    "groupTitle": "D__memestock_backend_node_modules_object_copy_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "protected",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Protected"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/authenticator.js",
    "group": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_authenticator_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "protected",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/framework/connect.js",
    "group": "D__memestock_backend_node_modules_passport_lib_framework_connect_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_framework_connect_js",
    "name": "Protected"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/http/request.js",
    "group": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/http/request.js",
    "group": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/http/request.js",
    "group": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/http/request.js",
    "group": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_http_request_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/index.js",
    "group": "D__memestock_backend_node_modules_passport_lib_index_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/authenticate.js",
    "group": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_middleware_authenticate_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/middleware/initialize.js",
    "group": "D__memestock_backend_node_modules_passport_lib_middleware_initialize_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_middleware_initialize_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "protected",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/strategies/session.js",
    "group": "D__memestock_backend_node_modules_passport_lib_strategies_session_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_strategies_session_js",
    "name": "Protected"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport/lib/strategies/session.js",
    "group": "D__memestock_backend_node_modules_passport_lib_strategies_session_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_lib_strategies_session_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/passport-strategy/lib/strategy.js",
    "group": "D__memestock_backend_node_modules_passport_strategy_lib_strategy_js",
    "groupTitle": "D__memestock_backend_node_modules_passport_strategy_lib_strategy_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/path-to-regexp/index.js",
    "group": "D__memestock_backend_node_modules_path_to_regexp_index_js",
    "groupTitle": "D__memestock_backend_node_modules_path_to_regexp_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/regex-not/index.js",
    "group": "D__memestock_backend_node_modules_regex_not_index_js",
    "groupTitle": "D__memestock_backend_node_modules_regex_not_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/regex-not/index.js",
    "group": "D__memestock_backend_node_modules_regex_not_index_js",
    "groupTitle": "D__memestock_backend_node_modules_regex_not_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/repeat-string/index.js",
    "group": "D__memestock_backend_node_modules_repeat_string_index_js",
    "groupTitle": "D__memestock_backend_node_modules_repeat_string_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/send/index.js",
    "group": "D__memestock_backend_node_modules_send_index_js",
    "groupTitle": "D__memestock_backend_node_modules_send_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/sliced/index.js",
    "group": "D__memestock_backend_node_modules_sliced_index_js",
    "groupTitle": "D__memestock_backend_node_modules_sliced_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/compiler.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_compiler_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_compiler_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/parser.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_parser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon/lib/source-maps.js",
    "group": "D__memestock_backend_node_modules_snapdragon_lib_source_maps_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_lib_source_maps_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-node/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_node_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/snapdragon-util/index.js",
    "group": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "groupTitle": "D__memestock_backend_node_modules_snapdragon_util_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/static-extend/index.js",
    "group": "D__memestock_backend_node_modules_static_extend_index_js",
    "groupTitle": "D__memestock_backend_node_modules_static_extend_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/to-regex/index.js",
    "group": "D__memestock_backend_node_modules_to_regex_index_js",
    "groupTitle": "D__memestock_backend_node_modules_to_regex_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/to-regex/index.js",
    "group": "D__memestock_backend_node_modules_to_regex_index_js",
    "groupTitle": "D__memestock_backend_node_modules_to_regex_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/use/index.js",
    "group": "D__memestock_backend_node_modules_use_index_js",
    "groupTitle": "D__memestock_backend_node_modules_use_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/use/index.js",
    "group": "D__memestock_backend_node_modules_use_index_js",
    "groupTitle": "D__memestock_backend_node_modules_use_index_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "private",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "D__memestock_backend_node_modules_util_deprecate_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_util_deprecate_browser_js",
    "name": "Private"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/util-deprecate/browser.js",
    "group": "D__memestock_backend_node_modules_util_deprecate_browser_js",
    "groupTitle": "D__memestock_backend_node_modules_util_deprecate_browser_js",
    "name": "Public"
  },
  {
    "type": "",
    "url": "public",
    "title": "",
    "version": "0.0.0",
    "filename": "./node_modules/utils-merge/index.js",
    "group": "D__memestock_backend_node_modules_utils_merge_index_js",
    "groupTitle": "D__memestock_backend_node_modules_utils_merge_index_js",
    "name": "Public"
  },
  {
    "type": "post",
    "url": "/emoji/",
    "title": "Create an emoji",
    "name": "CreateEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Image",
            "description": "<p>Image(emoji) of the subreddit.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "EMOJI_ID",
            "description": "<p>Unique id of image.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Report not found\n{\n         \"error\":\"request not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "post",
    "url": "/emoji/",
    "title": "Create an emoji",
    "name": "CreateEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Image",
            "description": "<p>Image(emoji) of the subreddit.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "EMOJI_ID",
            "description": "<p>Unique id of image.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "delete",
    "url": "/emoji/",
    "title": "Delete an emoji",
    "name": "DeleteEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "delete",
    "url": "/emoji/",
    "title": "Delete an emoji",
    "name": "DeleteEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "HTTP/1.1",
            "description": "<p>200 Ok.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "   HTTP/1.1 404 Report not found {\n        \"error\":\"request not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "put",
    "url": "/emoji/",
    "title": "Edit an emoji (instead of deleting then creating)",
    "name": "EditEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Image",
            "description": "<p>Image(emoji) of the subreddit.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "EMOJI_ID",
            "description": "<p>New unique id of new image.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "put",
    "url": "/emoji/",
    "title": "Edit an emoji (instead of deleting then creating)",
    "name": "EditEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Image",
            "description": "<p>Image(emoji) of the subreddit.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "EMOJI_ID",
            "description": "<p>New unique id of new image.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Report not found {\n         \"error\":\"request not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "get",
    "url": "/emoji/",
    "title": "Edit an emoji (instead of deleting then creating)",
    "name": "GetEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "EMOJI_ID",
            "description": "<p>New unique id of new image.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "get",
    "url": "/emoji/",
    "title": "Get's an emoji",
    "name": "GetEmoji",
    "group": "EmojiService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Image.",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "EmojiService"
  },
  {
    "type": "put",
    "url": "/Moderator/accept",
    "title": "accept moderator invite",
    "name": "AcceptmodInvite",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SrName",
            "description": "<p>unique SubbreditName  of the Subbredit .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"SrName\": \"funny\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK   \n{\n      message: \"Moderator request accepted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 SrName not found\n{\n         \"error\":\"SrName not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Subbreddit doesn't exist\n{\n         \"error\":\"Subbreddit doesn't exist\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Request doesn't exist\n{\n         \"error\": \"Request doesn't exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "put",
    "url": "/Moderator/ban",
    "title": "Remove moderator",
    "name": "Ban",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the user to be banned .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SrName",
            "description": "<p>unique SubbreditName  of the Subbredit .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"User0\",\n  \"SrName\":\"Ask reddit\" \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{    \n     \"message\": \"User banned successfully\" \n}",
          "type": "json"
        },
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{    \n     \"message\": \"Moderator banned successfully\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Username not found\n{\n         \"error\":\"Username not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 SrName not found\n{\n         \"error\":\"SrName not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Subbreddit doesn't exist\n{\n         \"error\":\"Subbreddit doesn't exist\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 402 User is not authorized to ban\n{\n         \"error\":\"User is not authorized to ban\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 User to be banned doesn't exist\n{\n         \"error\":\"User to be banned doesn't exist\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 402 User cannot ban himself\n{\n         \"error\":\"User cannot ban himself\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 402 User cannot ban the creator of the subreddit\n{\n         \"error\":\"User cannot ban the creator of the subreddit\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 402 User doesn't have the authority to ban a moderator\n{\n         \"error\":\"User doesn't have the authority to ban a moderator\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 402 User is already banned from Subreddit\n{\n         \"error\":\"User is already banned from Subreddit\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "Delete",
    "url": "/Moderator/Comment/:reportId",
    "title": "delete reported comment",
    "name": "DeleteComment",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": ":reportId",
            "description": "<p>ID of report.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{message:\"Comment deleted}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 401 The user isnt a moderator\n {\n  \"error\": \"You are not a moderator in this subreddit\"\n}\nHTTP/1.1 401 report doesnt exist\n {\n  \"error\":\"report doesnt exist\"\n}\nHTTP/1.1 401 ReportId not valid format\n {\n  \"error\":\"ReportId not valid\"\n}\nHTTP/1.1 401 Report isnt for a post\n {\n  \"error\":\"This isnt a Comment report\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "Delete",
    "url": "/Moderator/Post/:reportId",
    "title": "delete reported post",
    "name": "DeletePost",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reportId",
            "description": "<p>ID of report.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{message:\"post deleted}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 401 The user isnt a moderator\n {\n  \"error\": \"You are not a moderator in this subreddit\"\n}\nHTTP/1.1 401 report doesnt exist\n {\n  \"error\":\"report doesnt exist\"\n}\nHTTP/1.1 401 ReportId not valid format\n {\n  \"error\":\"ReportId not valid\"\n}\nHTTP/1.1 401 Report isnt for a post\n {\n  \"error\":\"This isnt a post report\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "Delete",
    "url": "/Moderator/Reports/:reportId",
    "title": "delete report",
    "name": "DeleteReport",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reportId",
            "description": "<p>ID of report.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n{message:\"report deleted}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 401 The user isnt a moderator\n {\n  \"error\": \"You are not a moderator in this subreddit\"\n}\nHTTP/1.1 401 report doesnt exist\n {\n  \"error\":\"report doesnt exist\"\n}\nHTTP/1.1 401 ReportId not valid format\n {\n  \"error\":\"ReportId not valid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "get",
    "url": "/Moderator/Reports/",
    "title": "Get all reports",
    "name": "Getreports",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reportedId",
            "description": "<p>id of comment or post</p>"
          },
          {
            "group": "Success 200",
            "type": "srName",
            "optional": false,
            "field": "subreddit",
            "description": "<p>of report</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "post",
            "description": "<p>a type that is  true if post , false if comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n[{\n        [\n    {\n        \"_id\": \"5cc4b675d7eb7343e073df38\",\n        \"reportedId\": \"121213521\",\n        \"srName\": \"Education\",\n        \"post\": true,\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5cc4b675d7eb7343e073df39\",\n        \"reportedId\": \"435422\",\n        \"srName\": \"343545454\",\n        \"post\": true,\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5cc4b675d7eb7343e073df3b\",\n        \"reportedId\": \"4n\",\n        \"srName\": \"Education\",\n        \"post\": true,\n        \"__v\": 0\n    }\n]\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 401 The user isnt a moderator\n {\n  \"error\": \"You are not a moderator to any subreddit\"\n}\nHTTP/1.1 401 no reports\n {\n  \"error\":\"No reports\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "put",
    "url": "/Moderator/Invite",
    "title": "invite moderator",
    "name": "addMod",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the Moderator to be added .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SrName",
            "description": "<p>unique SubbreditName  of the Subbredit .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"User0\",\n  \"SrName\":\"Ask reddit\" \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{    \n     \"message\": \"Moderator Invite Sent\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Username not found\n{\n         \"error\":\"Username not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 SrName not found\n{\n         \"error\":\"SrName not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Subbreddit doesn't exist\n{\n         \"error\":\"Subbreddit doesn't exist\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 402 User is not creator of the subreddit\n{\n         \"error\":\"User is not creator of the subreddit\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 402 User is not creator of the subreddit\n{\n         \"error\":\"User is not creator of the subreddit\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 User to be added as moderator doesn't exist\n{\n         \"error\":\"User to be added as moderator doesn't exist\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 402 User cannot add himself\n{\n         \"error\":\"User cannot add himself\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 401 User has already received a Moderation request\n{\n         \"error\":\"User has already received a Moderation request\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 401 User is already a moderator\n{\n         \"error\":\"User is already a moderator\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 401 User is banned from Subreddit\n{\n         \"error\":\"User is banned from Subreddit\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "put",
    "url": "/Moderator/leave",
    "title": "leave moderation",
    "name": "leaveMod",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SrName",
            "description": "<p>unique SubbreditName  of the Subbredit .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"SrName\": \"funny\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK   \n{\n      message: \"User has left moderation\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 SrName not found\n{\n         \"error\":\"SrName not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Subbreddit doesn't exist\n{\n         \"error\":\"Subbreddit doesn't exist\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 User isn't a moderator\n{\n         \"error\": \"User isn't a moderator\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "put",
    "url": "/Moderator/reject",
    "title": "reject moderator invite",
    "name": "rejectModRequest",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SrName",
            "description": "<p>unique SubbreditName  of the Subbredit .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"SrName\": \"funny\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK   \n{\n      message: \"Moderator request rejected\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 SrName not found\n{\n         \"error\":\"SrName not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Subbreddit doesn't exist\n{\n         \"error\":\"Subbreddit doesn't exist\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Request doesn't exist\n{\n         \"error\": \"Request doesn't exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "put",
    "url": "/Moderator/remove",
    "title": "Remove moderator",
    "name": "removeMod",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the Moderator to be removed .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SrName",
            "description": "<p>unique SubbreditName  of the Subbredit .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"User0\",\n  \"SrName\":\"Ask reddit\" \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{    \n     \"message\": \"Moderator removed\" \n}",
          "type": "json"
        },
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{    \n     \"message\": \"Request for moderation removed\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Username not found\n{\n         \"error\":\"Username not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 SrName not found\n{\n         \"error\":\"SrName not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Subbreddit doesn't exist\n{\n         \"error\":\"Subbreddit doesn't exist\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 402 User is not creator of the subreddit\n{\n         \"error\":\"User is not creator of the subreddit\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 User to be removed from moderation doesn't exist\n{\n         \"error\":\"User to be removed from moderation doesn't exist\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 402 User cannot remove himself\n{\n         \"error\":\"User cannot remove himself\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 401 User isn't a moderator\n{\n         \"error\":\"User isn't a moderator\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "put",
    "url": "/Moderator/unban",
    "title": "Remove moderator",
    "name": "unBan",
    "group": "Moderator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the user to be unbanned .</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SrName",
            "description": "<p>unique SubbreditName  of the Subbredit .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"User0\",\n  \"SrName\":\"Ask reddit\" \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{    \n     \"message\": \"User unbanned successfully\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Username not found\n{\n         \"error\":\"Username not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 SrName not found\n{\n         \"error\":\"SrName not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 Subbreddit doesn't exist\n{\n         \"error\":\"Subbreddit doesn't exist\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 402 User is not authorized to unban\n{\n         \"error\":\"User is not authorized to unban\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 User to be unbanned doesn't exist\n{\n         \"error\":\"User to be unbanned doesn't exist\"",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "    HTTP/1.1 402 User isn't banned from Subreddit\n{\n         \"error\":\"UseUser isn't banned from Subreddit\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Moderator"
  },
  {
    "type": "put",
    "url": "/notif/readall",
    "title": "Mark all notifications as read",
    "name": "ReadAllNotifications",
    "group": "NotificationsService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "NotificationsService"
  },
  {
    "type": "put",
    "url": "/notif/read/:id",
    "title": "Mark a notification as read",
    "name": "ReadNotification",
    "group": "NotificationsService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The notification ID sent in the url</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotificationNotFound",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "NotificationsService"
  },
  {
    "type": "get",
    "url": "/notif/",
    "title": "Retrieve a maximum of 15 notifications",
    "name": "RetrieveNotifications",
    "group": "NotificationsService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "startPosition",
            "defaultValue": "0",
            "description": "<p>0 means you want the latest 15 notifications and 1 means you want the next 15...etc.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Array",
            "description": "<p>of Notifications. for example if the type is post then the source ID will be this post ID(your post).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n   {\n\"notifications\":[\n  {\"_id\": \"dsjjda22\",\"username\": Marwan, \"type\": \"message\", \"message\": \"Mustafa_Ahmed Sent you a message\", \"sourceID\": null},\n  {\"_id\": \"gsdhsbd826\",\"username\": Mostafa,\"type\": \"post\", \"message\": \"Marwan commented on your post \", \"sourceID\": \"3546547fg\"},\n  {\"_id\": \"kdyufu787\",\"username\": Mostafa, \"type\": \"comment\", \"message\": \"Marwan replied on your comment \", \"sourceID\": \"gsdyu3g668\"},\n  {\"_id\": \"ldyufuhg7\",\"username\": Mostafa, \"type\": \"friendRequest\", \"message\": \"Mohamed sent you a freind request \", \"sourceID\": \"gsdyu3g6f6\"}\n  ]\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "NotificationsService"
  },
  {
    "type": "put",
    "url": "/notif/unread/:id",
    "title": "Mark a notification as unread",
    "name": "UnreadNotification",
    "group": "NotificationsService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The notification ID sent in the url.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotificationNotFound",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "NotificationsService"
  },
  {
    "type": "post",
    "url": "/me/pm/block",
    "title": "Block",
    "name": "Block",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blocked",
            "description": "<p>unique username to be blocked.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "block",
            "description": "<p>true when u need to block false when u need to unblock a user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "userNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "usersAlreadyOnBlockLists",
            "description": "<p>The user you are trying to block is already on the block list</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "selfBlockAlert",
            "description": "<p>an alert if there is a request for selfblock</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalServerBlockingError",
            "description": "<p>error from the internal server side</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "canNotBUnblockNonBlockedUser",
            "description": "<p>unblocking not blocked user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 forbidden \n{\n  \"error\": \"canNotBUnblockNonBlockedUser\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"internalServerBlockingError\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"usersAlreadyOnBlockLists\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"selfBlockAlert\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "PMService"
  },
  {
    "type": "post",
    "url": "/me/pm/compose",
    "title": "Compose a new message",
    "name": "Compose",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "receiverUsername",
            "description": "<p>unique username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Subject of the sending message (no longer than 100 character).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "messageBody",
            "description": "<p>the text of the message sent.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "userNotFound",
            "description": "<p>The <code>id</code> of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "receiverNotFound",
            "description": "<p>the username of the receiver was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "blockedFromSending",
            "description": "<p>The user already blocking messages from the receiver</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "overLengthedSubject",
            "description": "<p>The length of the subject is above 100 character</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalServerError",
            "description": "<p>error from the bank end and database manipulation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"blockedFromSending\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"overLengthedSubject\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "PMService"
  },
  {
    "type": "delete",
    "url": "/me/pm/delete?messageID=value",
    "title": "Delete",
    "name": "Delete",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "messageId",
            "description": "<p>the id of the message going to be deleted.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack and to verify the deletion of the message.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "messageNotFound",
            "description": "<p>The <code>id</code> of the Message was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalServererror",
            "description": "<p>internal error caused by unexplained behavior</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"messageNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "PMService"
  },
  {
    "type": "put",
    "url": "/me/pm/markread",
    "title": "Mark Read",
    "name": "MarkAsRead",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "messageId",
            "description": "<p>the id of the message going to be marked as read.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isReadRequest",
            "description": "<p>true when user wants to mark as read a message false when user wants to mark message as unread</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "messageNotFound",
            "description": "<p>The <code>id</code> of the Message was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalServererror",
            "description": "<p>internal error caused by unexplained behavior</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"messageNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "PMService"
  },
  {
    "type": "post",
    "url": "/me/pm/markreadall",
    "title": "Mark Read-all",
    "name": "MarkReadALL",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isReadRequest",
            "description": "<p>true when user wants to mark as read all message false when user wants to markall as unread</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "messageNotFound",
            "description": "<p>No messages to mark empty array</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalServererror",
            "description": "<p>internal error caused by unexplained behavior</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"messageNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "PMService"
  },
  {
    "type": "get",
    "url": "/me/pm/?mine=value",
    "title": "Retrieve",
    "name": "RetrieveMessages",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "mine",
            "description": "<p>true if u need to retrieve the inbox false if u need to retrieve the sent.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "messages",
            "description": "<p>Object that contains an array  of objects that contains data of the messages HTTP/1.1 200 OK { &quot;messages&quot;: [ { &quot;_id&quot;: &quot;5cb65052ef99a60342fd70b6&quot;, &quot;sender&quot;: &quot;mostafak&quot;, &quot;receiverUsername&quot;: &quot;mostafa&quot;, &quot;subject&quot;: &quot;m&quot;, &quot;messageBody&quot;: &quot;m&quot;, &quot;messageDate&quot;: &quot;2019-04-16T21:59:46.000Z&quot; }, { &quot;_id&quot;: &quot;5cb650430aa7d8033938c073&quot;, &quot;sender&quot;: &quot;mostafak&quot;, &quot;receiverUsername&quot;: &quot;mostafa&quot;, &quot;subject&quot;: &quot;m&quot;, &quot;messageBody&quot;: &quot;m&quot;, &quot;messageDate&quot;: &quot;2019-04-16T21:59:31.000Z&quot; }, { &quot;_id&quot;: &quot;5cb64e3537491f02f38ee6fb&quot;, &quot;sender&quot;: &quot;mostafak&quot;, &quot;receiverUsername&quot;: &quot;mostafak&quot;, &quot;subject&quot;: &quot;m&quot;, &quot;messageBody&quot;: &quot;m&quot;, &quot;messageDate&quot;: &quot;2019-04-16T21:50:45.000Z&quot; } ] }</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "internalServerFindingError",
            "description": "<p>internal error caused by unexplained behavior</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": \"internalServerFindingError\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "PMService"
  },
  {
    "type": "get",
    "url": "/me/pm/blocklist",
    "title": "Blocklist",
    "name": "retrieveBlockList",
    "group": "PMService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "blockList",
            "description": "<p>object that contains an array of objects of people whom the user is blocking  from receieving messages from them  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n{\n\"blockList\": [\n     {\n         \"blocked\": \"atwa_leader\"\n     },\n     {\n         \"blocked\": \"mostafak\"\n     }\n              ]\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "PMService"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Request User information",
    "name": "GetUser__method___endpoint_path_",
    "group": "ServiceName",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID. {if any}</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n    {\n      \"error\": \"UserNotFound\"\n    }\n//////////////////////////////////////",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "ServiceName"
  },
  {
    "type": "post",
    "url": "/sr/:srName/thread",
    "title": "Create a thread inside subreddit",
    "name": "CreateSrThread",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Send token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Title of thread</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "threadBody",
            "description": "<p>Body of the thread.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "postFile",
            "description": "<p>Post image or video (Supported file formats: jpeg/png/mp4)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "spoiler",
            "description": "<p>Mark if post is spoiler</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "post",
    "url": "/sr/create",
    "title": "Create a new subreddit",
    "name": "CreateSubreddit",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Send token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "srName",
            "description": "<p>unique Name of the subreddit (no longer than 100 character).</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "srRules",
            "description": "<p>list of subbreddit rules.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "subredditFile",
            "description": "<p>Subreddit's image or video (Supported file formats: jpeg/png/mp4).</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "modUsername",
            "description": "<p>Subreddit moderators' usernames.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "newSubreddit",
            "description": "<p>Returns the created subreddit (if any).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "delete",
    "url": "/sr/:srName/thread/:postId",
    "title": "Delete a thread inside subreddit",
    "name": "DeleteSrThread",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Send token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "deletedPost",
            "description": "<p>Returns the deleted post inside subreddit.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "delete",
    "url": "/sr/:srName",
    "title": "Delete a subreddit",
    "name": "DeleteSubreddit",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Send token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "deletedSubreddit",
            "description": "<p>Returns the deleted subreddit (if any).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "put",
    "url": "/sr/:srName/thread/:postId",
    "title": "Edit a thread inside subreddit",
    "name": "EditSrThread",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Send token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>New title of thread</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "threadBody",
            "description": "<p>New body of the thread.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "spoiler",
            "description": "<p>New spoiler.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "editedPost",
            "description": "<p>Returns the edited post inside subreddit.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "put",
    "url": "/sr/:srName/",
    "title": "Edit a subreddit",
    "name": "EditSubreddit",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Send token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "newRules",
            "description": "<p>Updated rules.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newName",
            "description": "<p>New name</p>"
          },
          {
            "group": "Parameter",
            "type": "string[]",
            "optional": false,
            "field": "newMods",
            "description": "<p>Updated moderators.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newBio",
            "description": "<p>Updated about.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "newFile",
            "description": "<p>New image or video.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "editedSubreddit",
            "description": "<p>Returns the edited subreddit (if any).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "get",
    "url": "/sr/:SubredditName/listing/:type",
    "title": "ListSubreddits   Generate a list of subreddits",
    "name": "ListSubreddits",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Type",
            "description": "<p>List according to certain type</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "SubredditIDs",
            "description": "<p>Returns list of sorted subreddits</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "post",
    "url": "/sr/:srName/thread/:postId/report",
    "title": "Unvote a thread inside subreddit",
    "name": "ReportThread",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Send token.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reportText",
            "description": "<p>Reason for reporting the post.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "reportedPost",
            "description": "<p>Returns the unvoted post inside subreddit.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "post",
    "url": "/sr/:srName/subs",
    "title": "Subscribe to a Sr",
    "name": "SubredditSubscribtion",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Send token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "subscribersList",
            "description": "<p>Returns the new subscribers list.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "delete",
    "url": "/sr/:srName/subs",
    "title": "Unsubscribe to a Sr",
    "name": "SubredditUnsubscribtion",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Send token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "subscribersList",
            "description": "<p>Returns the new subscribers list.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "delete",
    "url": "/sr/:srName/thread/:postId/vote",
    "title": "Unvote a thread inside subreddit",
    "name": "UnvoteSrThread",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Send token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "unvotedPost",
            "description": "<p>Returns the unvoted post inside subreddit.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "get",
    "url": "/sr/:srName/thread/:postId",
    "title": "Views subreddit meta",
    "name": "ViewPostInfo",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "srName",
            "description": "<p>Subreddit name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "postId",
            "description": "<p>ID of post.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "post",
            "description": "<p>Returns post.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "get",
    "url": "/sr/:srName/meta",
    "title": "Views subreddit meta",
    "name": "ViewSrMeta",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "srName",
            "description": "<p>Subreddit name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>Username of Creator.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "date",
            "description": "<p>date of creation.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "postId",
            "description": "<p>All posts ids.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "rules",
            "description": "<p>Rules of sr.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Bio",
            "description": "<p>Subreddit's bio.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "BannedUsers",
            "description": "<p>(NOT YET)   ID of banned users.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "modUsername",
            "description": "<p>Usernames of Modertors.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "subscibers",
            "description": "<p>Subscriber usernames.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "subredditFile",
            "description": "<p>Image or video of subreddit.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "post",
    "url": "/sr/:srName/thread/:postId/vote",
    "title": "Upvote or downvote a thread inside subreddit",
    "name": "VoteSrThread",
    "group": "SrService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Send token.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "upvote",
            "description": "<p>Is the user upvoting or downvoting.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "votedPost",
            "description": "<p>Returns the voted post inside subreddit.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "SrService"
  },
  {
    "type": "get",
    "url": "/user/:Username/comments/listing?type=value",
    "title": "List Comments",
    "name": "ListComments",
    "group": "UserService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ListingType",
            "description": "<p>Type of the listing that the user wants for the Comments.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Comments",
            "description": "<p>Array of the listed Comments  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Comments\": [ {\n  \"SubbredditName\": \"r/Damn\",\n  \"PostID\" :3,\n  \"Content\" : \"Hussein is on fire \"\n  },\n  {\n  \"SubbredditName\": \"r/funny\",\n  \"PostID\" :1,\n  \"Content\" : \"Let's see who wins this contest \"\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentsNotFound",
            "description": "<p>no comments found to be listed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CommentsNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "UserService"
  },
  {
    "type": "get",
    "url": "/me/listing?type=value&_id=value&votes=value&hotindex=value",
    "title": "List Posts",
    "name": "ListPosts",
    "group": "UserService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>(hot,top,new) aType of the listing that the user wants for the posts.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>0 for the first time then the id  for the last post retrieved to avoid redundency</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "votes",
            "description": "<p>the votes for the last post id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hotindex",
            "description": "<p>the hot score of the last post (0) if not of type hot</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Posts",
            "description": "<p>Object in the JSON that contains an array of objects the listed Posts depending on the type. Note: field hot index is only sent on the type hot request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n  \"posts\": [\n      {\n          \"_id\": \"5cc38191735094039ec8d927\",\n          \"title\": \"Rush Hour 4\",\n          \"body\": \"There are rumors that Rush Hour 4 might be in the making.\",\n          \"creatorUsername\": \"sabek\",\n          \"subredditName\": \"Movies\",\n          \"postDate\": \"2019-04-26T22:09:21.236Z\",\n      },\n      {\n          \"_id\": \"5cc38191735094039ec8d926\",\n          \"title\": \"Avengers: Endgame\",\n          \"body\": \"Unpopular opinion: Endgame is super overrated.\",\n          \"creatorUsername\": \"captainmaged\",\n          \"subredditName\": \"Movies\",\n          \"postDate\": \"2019-04-26T22:09:21.221Z\",\n      }\n          ]\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n {\n  \"posts\": [\n      {\n          \"_id\": \"5cc38191735094039ec8d927\",\n          \"title\": \"Rush Hour 4\",\n          \"body\": \"There are rumors that Rush Hour 4 might be in the making.\",\n          \"creatorUsername\": \"sabek\",\n          \"subredditName\": \"Movies\",\n          \"postDate\": \"2019-04-26T22:09:21.236Z\",\n          \"hotindex\": 9500\n      },\n      {\n          \"_id\": \"5cc38191735094039ec8d926\",\n          \"title\": \"Avengers: Endgame\",\n          \"body\": \"Unpopular opinion: Endgame is super overrated.\",\n          \"creatorUsername\": \"captainmaged\",\n          \"subredditName\": \"Movies\",\n          \"postDate\": \"2019-04-26T22:09:21.221Z\",\n          \"hotindex\": 9490\n      }\n          ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "postsnotFound",
            "description": "<p>no posts found for the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"postsNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "UserService"
  },
  {
    "type": "get",
    "url": "/user/:Username/Votes",
    "title": "Votes of User",
    "name": "Votes",
    "group": "UserService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Votes",
            "description": "<p>Array of the listed Votes  .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"Votes\": [ {\n    \"Type\" : \"Upvote\",\n  \"SubbredditName\": \"r/Damn\",\n  \"PostID\" :3\n  },\n  {\n    \"Type\" : \"Upvote\",\n  \"SubbredditName\": \"r/funny\",\n  \"PostID\" :1\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentsNotFound",
            "description": "<p>no comments found to be listed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CommentsNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "UserService"
  },
  {
    "type": "put",
    "url": "/me/user/accept",
    "title": "Accept Request",
    "name": "AcceptRequest",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fUsername",
            "description": "<p>unique Username  of user to Accept request from.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"user1\", \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{    \n     \"message\": \"Friend request accepted\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 fUsername not found\n {\n  \"error\": \"fUsername not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 404 User to accept not found\n {\n  \"error\": \"User to accept not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 401 This user is already a friend\n {\n  \"error\": \"This user is already a friend\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 401 There isn't a request to be accepted\n {\n  \"error\": \"There isn't a request to be accepted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "put",
    "url": "/me/user/block",
    "title": "Block user",
    "name": "BlockUser",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token .</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "blockedUser",
            "description": "<p>unique Username  of the User to be blocked.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"blockedUser\": \"User1\"      \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 \n{\n    \"User Blocked\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "    HTTP/1.1 404 user already blocked\n     {\n     error:\"the user you want to block is already blocked\"\n    },\nHTTP/1.1 404 User not found\n     {\n    error:\"the user you want to block doesnt exist\"\n    },\nHTTP/1.1 404 User blocking himself\n     {\n      error:\"you cant block yourself\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "get",
    "url": "/me/blockedusers",
    "title": "Get Blocked users",
    "name": "BlockedUsers",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token .</p>"
          }
        ]
      }
    },
    "group": "me",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": true,
            "field": "String",
            "description": "<p>BlockedUsername unique Username  of the User to be blocked.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n\n[\n  \"User1\",\n  \"User2\",\n  \"User3\",\n  \"User4\"     \n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "post",
    "url": "/user/CreateFlair",
    "title": "create new flair",
    "name": "CreateFlair",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token .</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "srName",
            "description": "<p>subreddit in which to create flair</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "flair",
            "description": "<p>the flair you want to create</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 \n{\n   message:\"flair created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 didnt send srName\n {\n error:\"subreddit name missing\"\n}\n HTTP/1.1 404 you alreadfy have a flair in this sr\n {\n error:\"you alredy have a flair in this subreddit\"\n}\n HTTP/1.1 404 didnt send flair \n {\n {error:\"flair missing\"\n}\n HTTP/1.1 404 subreddit doent exist\n {\n error:\"subreddit doesnt exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "Register new user",
    "name": "CreateUser",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>email  of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password  of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Email\": \"user@reddit.com\",\n  \"Username\": \"User1\",\n  \"Password\": \"Password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token That is sent with authentication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n \"token\":\"we8749832b7498c2b78942\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "   \nHTTP/1.1 406 password short\n{\n\"error\":\"Password too short\"\n}\n\n HTTP/1.1 406 username repeated \n{\n\"error\":\"Username already exists\"\n}\nHTTP/1.1 406 email repeated \n{\n\"error\":\"Email already exists\"\n}\n\nHTTP/1.1 406 email format \n{\n\"error\":\"Invalid Email format\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "delete",
    "url": "/user/FlairDelete/:srName",
    "title": "gets flair for this user in specific subreddit",
    "name": "DeleteFlair",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token .</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "srName",
            "description": "<p>the subreddit name you want to delete from</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 \n {\n     \"message\": \"flair deleted\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 no flair exists\n {\nerror:\"No flairs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "Put",
    "url": "/me/edit/About",
    "title": "Edit About Info",
    "name": "EditAbout",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "About",
            "description": "<p>the About information of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"About\": \"My name is Uzumaki, I am the perfect being on Earth\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"About Information updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 About parameter not found\n {\n  \"error\": \"About parameter not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 402 Enter a valid String containing information\n {\n  \"error\": \"Enter a valid String containing information\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "Put",
    "url": "/me/edit/email/:Username",
    "title": "Edit User email",
    "name": "EditUserEmail",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>email  of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Email\": \"user@reddit.com\",\n  \"Username\": \"User1\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 User not found\n {\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 406 Invalid Email format\n {\n  \"error\": \"Invalid Email format\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 406 Email already exists\n {\n     \"error\" : \"Email already exists\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "Put",
    "url": "/me/edit/Password/:Username",
    "title": "Edit User password",
    "name": "EditUserPassword",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NewPassword",
            "description": "<p>the new Password for the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OldPassword",
            "description": "<p>the Old Password of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Email\": \"user@reddit.com\",\n  \"Username\": \"User1\",\n  \"Password\": \"Password\",\n  \"ImageID\" : 3\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 User not found\n {\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 401 Wrong Password\n {\n  \"error\": \"Wrong Password\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 406 Password too short\n {\n   error: \"Password too short\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "put",
    "url": "/me/user/Add",
    "title": "Add new friend",
    "name": "FriendAdd",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FriendUsername",
            "description": "<p>unique Username  of user to add.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"user1\", \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{    \n     \"message\": \"Friend request Sent\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 fUsername not found\n {\n  \"error\": \"fUsername not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 404 User to be added not found\n {\n  \"error\": \"User to be added not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 402 User cannot add himself\n {\n  \"error\": \"User cannot add himself\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 401 The sending User is blocked\n {\n  \"error\": \"The sending User is blocked\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 401 The user to be added is blocked\n {\n  \"error\": \"The user to be added is blocked\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 401 User not found\n {\n  \"error\": \"The User to be added is already a friend\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 401 User has already received a request from the other user\n {\n  \"error\": \"User has already received a request from the other user\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 401 User has already sent a request to the other user\n {\n  \"error\": \"User has already sent a request to the other user\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "Get",
    "url": "/me/friends",
    "title": "get friends",
    "name": "FriendList",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[String]",
            "optional": false,
            "field": "FUsername",
            "description": "<p>unique Username  of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP/1.1 200 OK\n\n {\"Friends\" :[\"User1\" , \"User2\"]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 server error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "get",
    "url": "/user/Flairs",
    "title": "gets all flairs for this user",
    "name": "GetAllFlairs",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token .</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 \n[\n    {\n        \"_id\": \"5cc5e38d58af9d0e34be6663\",\n        \"username\": \"mostafa_hazem\",\n        \"srName\": \"Education\",\n        \"flair\": \"el bob\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"5cc5ed2bf14172494416af83\",\n        \"username\": \"mostafa_hazem\",\n        \"srName\": \"Technology\",\n        \"flair\": \"el bob2\",\n        \"__v\": 0\n    }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 no flair exists\n {\nerror:\"No flairs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "get",
    "url": "/user/Flairs/:srName",
    "title": "gets flair for this user in specific subreddit",
    "name": "GetFlair",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token .</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "srName",
            "description": "<p>the subreddit name you want to delete from</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 \n {\n     \"flair\": \"el bob\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 no flair exists\n {\nerror:\"No flairs\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "get",
    "url": "/user/info:userToView",
    "title": "get user info if NOT logged in",
    "name": "GetUserInfo",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToView",
            "description": "<p>unique Username  of the User to be viewed.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 \n{\n     \"Username\":\"user1\",\n     Subscriptions:[\"sub1\",\"sub2\",\"sub3\"]\n     ,\"cakeday\":\"2019-04-28T19:07:29.386Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 user doesnt exist\n {\n \"message\": \"User doesnt exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "get",
    "url": "/me/user/info/:userToView",
    "title": "get user info if logged in",
    "name": "GetUserInfoLogged",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token .</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userToView",
            "description": "<p>unique Username  of the User to be viewed.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 if friends \n {\n    \"Username\": \"mostafa_hazem\",\n    \"Subscriptions\": [],\n    \"About\":\"im a nice user, hi\",\n    \"cakeday\": \"2019-04-29T01:07:28.002Z\",\n    \"savedPosts\": [\n        {\n            \"_id\": \"5cc64e61cd11128f20a8feb0\",\n            \"postId\": \"5cc6402a0eeec17074898ddc\",\n            \"title\": \"Laptops\"\n        },\n        \n        {\n            \"_id\": \"5cc650cf37392481409af63f\",\n            \"postId\": \"5cc6402a0eeec17074898de3\",\n            \"title\": \"Rush Hour 4\"\n        }\n    ],\n    \"Friends\": [\n        \"Ali_yasser\"\n    ]\n}\nHTTP/1.1 200 if not friends \n{\n    \"Username\": \"TestmanSe7\",\n    \"cakeday\": \"2019-04-29T01:07:28.406Z\",\n    \"About\":\"im a nicer project\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 user blocked you or doesnt exist\n {\n \"message\": \"User doesnt exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "get",
    "url": "/me/About/:Username",
    "title": "Request my account information",
    "name": "Getmyinfo",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>User's unique username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Token",
            "description": "<p>SyncToken That is sent with authentication..</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>username  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>email  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "About",
            "description": "<p>text to describe the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Imageid",
            "description": "<p>Image id  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Karma",
            "description": "<p>Karma of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Cakeday",
            "description": "<p>Date of joining Reddit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "Subscriptions",
            "description": "<p>subreddit subscriptons  of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "moderates",
            "description": "<p>subreddits moderated</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "recreq",
            "description": "<p>friend requests received</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "sentreq",
            "description": "<p>freind requests sent</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "modreq",
            "description": "<p>moderation requests</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "freinds",
            "description": "<p>list of all friends</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "blocked",
            "description": "<p>list of all blocked users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n    \"Subscriptions\": [\n        \"Movies\",\n        \"Technology\",\n        \"Education\"\n    ],\n    \"moderates\": [\n        \"Movies\"\n    ],\n    \"ModReq\": [\n        \"Technology\"\n    ],\n    \"blockedUsers\": [\n        \"Ayman\"\n    ],\n    \"Friends\": [\n        \"Ali_yasser\"\n    ],\n    \"SentReq\": [\n        \"TestmanSe7\"\n    ],\n    \"RecReq\": [\n        \"zaghw\"\n    ],\n    \"_id\": \"5cc64e50c206fb368c8e4fa5\",\n    \"Username\": \"mostafa_hazem\",\n    \"Email\": \"mostafa_hazem@m.com\",\n    \"SavedPosts\": [\n        {\n            \"_id\": \"5cc64e61cd11128f20a8feb0\",\n            \"postId\": \"5cc6402a0eeec17074898ddc\",\n            \"title\": \"Laptops\"\n        },\n        {\n            \"_id\": \"5cc650cf37392481409af63f\",\n            \"postId\": \"5cc6402a0eeec17074898de3\",\n            \"title\": \"Rush Hour 4\"\n        }\n    ],\n    \"cakeday\": \"2019-04-29T01:07:28.002Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 User not found\n  {\n   \"error\": \"User Not Found\"\n }",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 405 User not found\n  {\n   \"error\": \"Not Authorized\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "post",
    "url": "/user/Login",
    "title": "login attempt",
    "name": "LoginUser",
    "group": "me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Username",
            "description": "<p>unique Username  of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Password",
            "description": "<p>Password  of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"User1\",\n  \"Password\": \"Password\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Token",
            "description": "<p>Token That is sent with authentication.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{\n \"token\":\"we8749832b7498c2b78942\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "   HTTP/1.1 401 Invalid\n{\n         \"error\"\":\"Invalid Password\"\n}\n\n HTTP/1.1 404 Invalid\n{\n       \"error\"\":\"User doesnt exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "put",
    "url": "/me/user/reject",
    "title": "Reject Request",
    "name": "RejectRequest",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fUsername",
            "description": "<p>unique Username  of user to reject.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"user1\", \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{    \n     \"message\": \"Friend request rejected\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 fUsername not found\n {\n  \"error\": \"fUsername not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 404 User to reject not found\n {\n  \"error\": \"User to reject not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 401 This user is already a friend\n {\n  \"error\": \"This user is already a friend\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 401 There isn't a request to be rejected\n {\n  \"error\": \"There isn't a request to be rejected\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "put",
    "url": "/me/user/removeReq",
    "title": "delete friend request",
    "name": "RemoveFriendRequest",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fUsername",
            "description": "<p>unique Username  of user to unadd.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"user1\", \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{    \n     \"message\": \"Friend request Removed\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 fUsername not found\n {\n  \"error\": \"fUsername not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 404 User to be removed not found\n {\n  \"error\": \"User to be removed not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 404 Request doesn't exist\n {\n  \"error\": \"Request doesn't exist\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "Get",
    "url": "/me/sentRequests",
    "title": "get sent requests",
    "name": "SentRequestsList",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "FUsername",
            "description": "<p>unique Username  of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP/1.1 200 OK\n\n {\n    \"sentRequests\" :[\"User1\" , \"User2\"]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 server error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "put",
    "url": "/me/user/unblock",
    "title": "unblock user",
    "name": "UnblockUser",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token .</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "unblockedUser",
            "description": "<p>unique Username  of the User to be unblocked.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"unblockedUser\": \"User1\"    \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 \n{\n    \"User unblocked\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 user isnt blocked\n {\n error:\"the user you want to unblock isnt blocked\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "put",
    "url": "/me/user/Unfriend",
    "title": "unfriend",
    "name": "Unfriend",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fUsername",
            "description": "<p>unique Username  of user to delete.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"Username\": \"user1\", \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n{    \n     \"message\": \"Friend is removed from friends list\" \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 404 fUsername not found\n {\n  \"error\": \"fUsername not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 404 User to unFriend not found\n {\n  \"error\": \"User to unFriend not found\"\n}",
          "type": "json"
        },
        {
          "title": "List error",
          "content": "HTTP/1.1 401 This user is not a friend\n {\n  \"error\": \"This user is not a friend\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "Get",
    "url": "/me/receivedRequests",
    "title": "get received requests",
    "name": "receivedRequestsList",
    "group": "me",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "auth",
            "description": "<p>Users unique token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "FUsername",
            "description": "<p>unique Username  of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "\nHTTP/1.1 200 OK\n\n {\n    \"receivedRequests\" :[\"User1\" , \"User2\"]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 server error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "me"
  },
  {
    "type": "post",
    "url": "/emoji/",
    "title": "Create an emoji",
    "name": "CreateEmoji",
    "group": "test",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SyncToken",
            "description": "<p>Sent as Header used for Synchronization and preventing CHRF Attack.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "TESSST",
            "description": "<p>Image(emoji) of the subreddit.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubredditName",
            "description": "<p>Name of subreddit to add image to.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "EMOJI_ID",
            "description": "<p>Unique id of image.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "test"
  }
] });
