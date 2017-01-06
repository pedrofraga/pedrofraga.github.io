define({ "api": [
  {
    "type": "post",
    "url": "/backoffice/login",
    "title": "Backoffice login",
    "name": "BackofficeLogin",
    "group": "Backoffice",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Admin password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (WrongPassword):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Password errada!\"\n    }",
          "type": "json"
        },
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"A autenticação falhou.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/backoffice.js",
    "groupTitle": "Backoffice"
  },
  {
    "type": "get",
    "url": "/backoffice/logout",
    "title": "Backoffice logout",
    "name": "BackofficeLogout",
    "group": "Backoffice",
    "version": "0.0.0",
    "filename": "routes/backoffice.js",
    "groupTitle": "Backoffice"
  },
  {
    "type": "get",
    "url": "/backoffice/",
    "title": "Get backoffice page",
    "name": "GetBackoffice",
    "group": "Backoffice",
    "version": "0.0.0",
    "filename": "routes/backoffice.js",
    "groupTitle": "Backoffice"
  },
  {
    "type": "post",
    "url": "/iep/activate",
    "title": "Activate IEP",
    "name": "ActivateIEP",
    "group": "IEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the IEP to activate.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível ativar a IEP.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/iep.js",
    "groupTitle": "IEP"
  },
  {
    "type": "post",
    "url": "/iep/add",
    "title": "Add IEP",
    "name": "AddIEP",
    "group": "IEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>IEP name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>IEP contact method.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>IEP website.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>IEP type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>IEP phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>IEP street address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>IEP location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>IEP zipcode.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "concelho",
            "description": "<p>IEP concelho.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "distrito",
            "description": "<p>IEP distrito.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>IEP photo banner.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>ID of the user that submitted the IEP.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Duplicate):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Instituição/Equipa/Profissional já existente.\"\n    }",
          "type": "json"
        },
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível criar a IEP.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/iep.js",
    "groupTitle": "IEP"
  },
  {
    "type": "post",
    "url": "/iep/list",
    "title": "Add to user listings",
    "name": "AddIEPToListing",
    "group": "IEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "iepId",
            "description": "<p>ID of the IEP.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível adicionar a Instituição/Equipa/Profissional às suas listagens.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/iep.js",
    "groupTitle": "IEP"
  },
  {
    "type": "post",
    "url": "/iep/approve",
    "title": "Approve IEP",
    "name": "ApproveIEP",
    "group": "IEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the IEP to approve.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível aprovar a IEP.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/iep.js",
    "groupTitle": "IEP"
  },
  {
    "type": "post",
    "url": "/iep/edit",
    "title": "Edit IEP",
    "name": "EditIEP",
    "group": "IEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>IEP name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>IEP contact method.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "website",
            "description": "<p>IEP website.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>IEP type.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>IEP phone number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>IEP street address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "location",
            "description": "<p>IEP location.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>IEP zipcode.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "concelho",
            "description": "<p>IEP concelho.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "distrito",
            "description": "<p>IEP distrito.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "banner",
            "description": "<p>IEP photo banner.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível editar a IEP.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/iep.js",
    "groupTitle": "IEP"
  },
  {
    "type": "post",
    "url": "/iep/allieps",
    "title": "Get all IEPs",
    "name": "GetAllIEPs",
    "group": "IEP",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"text\": null,\n  \"json\": List of IEPs (Array of objects)\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/iep.js",
    "groupTitle": "IEP"
  },
  {
    "type": "post",
    "url": "/iep/concelhos",
    "title": "Get all concelhos",
    "name": "GetConcelhos",
    "group": "IEP",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"text\": null,\n  \"json\": List of all concelhos (Array of objects)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível ir buscar os concelhos.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/iep.js",
    "groupTitle": "IEP"
  },
  {
    "type": "post",
    "url": "/iep/distritos",
    "title": "Get all distritos",
    "name": "GetDistritos",
    "group": "IEP",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"text\": null,\n  \"json\": List of all distritos (Array of objects)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível ir buscar os distritos.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/iep.js",
    "groupTitle": "IEP"
  },
  {
    "type": "get",
    "url": "/iep/:slug",
    "title": "Get IEP page",
    "name": "GetIEP",
    "group": "IEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>IEP slug.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/iep.js",
    "groupTitle": "IEP"
  },
  {
    "type": "post",
    "url": "/iep/data",
    "title": "Get IEP info",
    "name": "GetIEP",
    "group": "IEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the IEP.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"text\": null,\n  \"json\": IEP (Object)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível aceder à IEP.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/iep.js",
    "groupTitle": "IEP"
  },
  {
    "type": "post",
    "url": "/iep/hide",
    "title": "Hide IEP",
    "name": "HideIEP",
    "group": "IEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the IEP to hide.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível desativar a IEP.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/iep.js",
    "groupTitle": "IEP"
  },
  {
    "type": "post",
    "url": "/iep/like",
    "title": "Like IEP",
    "name": "LikeIEP",
    "group": "IEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "iepId",
            "description": "<p>ID of the IEP.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível adicionar a Instituição/Equipa/Profissional aos favoritos.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/iep.js",
    "groupTitle": "IEP"
  },
  {
    "type": "get",
    "url": "/iep/all",
    "title": "Render IEPs listing page",
    "name": "RenderIEPListing",
    "group": "IEP",
    "version": "0.0.0",
    "filename": "routes/iep.js",
    "groupTitle": "IEP"
  },
  {
    "type": "post",
    "url": "/iep/search",
    "title": "Search IEPs in rate modal",
    "name": "SearchIEP",
    "group": "IEP",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>IEP name.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"text\": null,\n  \"json\": List of IEPs (Array of objects)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"A pesquisa falhou, experimente pesquisar por outro termo.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/iep.js",
    "groupTitle": "IEP"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Render index page",
    "name": "RenderIndex",
    "group": "Index",
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Index"
  },
  {
    "type": "post",
    "url": "/indicators/create",
    "title": "Create indicator",
    "name": "CreateIndicator",
    "group": "Indicators",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Indicator name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Indicator description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Indicator type.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Ocorreu um erro durante a criação de um indicador\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/indicators.js",
    "groupTitle": "Indicators"
  },
  {
    "type": "post",
    "url": "/indicators/",
    "title": "Get all indicators",
    "name": "GetAllIndicators",
    "group": "Indicators",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"text\": null,\n  \"json\": List of Indicators (Array of objects)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Ocorreu um erro durante o pedido de indicadores ao servidor, contacte os administradores\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/indicators.js",
    "groupTitle": "Indicators"
  },
  {
    "type": "post",
    "url": "/indicators/update",
    "title": "Update indicator",
    "name": "UpdateIndicator",
    "group": "Indicators",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Indicator name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Indicator description.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Indicator type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "disabled",
            "description": "<p>Status.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Ocorreu um erro durante a edição de um indicador\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/indicators.js",
    "groupTitle": "Indicators"
  },
  {
    "type": "get",
    "url": "/info/about",
    "title": "Render about page",
    "name": "RenderAbout",
    "group": "Info_pages",
    "version": "0.0.0",
    "filename": "routes/info.js",
    "groupTitle": "Info_pages"
  },
  {
    "type": "get",
    "url": "/info/terms",
    "title": "Render terms and conditions page",
    "name": "RenderTerms",
    "group": "Info_pages",
    "version": "0.0.0",
    "filename": "routes/info.js",
    "groupTitle": "Info_pages"
  },
  {
    "type": "post",
    "url": "/listing/list",
    "title": "Get user listing",
    "name": "GetListing",
    "group": "Listing",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível obter as suas listagens.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/listing.js",
    "groupTitle": "Listing"
  },
  {
    "type": "get",
    "url": "/listing/",
    "title": "Render user listing page",
    "name": "RenderListingPage",
    "group": "Listing",
    "version": "0.0.0",
    "filename": "routes/listing.js",
    "groupTitle": "Listing"
  },
  {
    "type": "post",
    "url": "/reviews/create",
    "title": "Create review",
    "name": "CreateReview",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stars",
            "description": "<p>Review stars.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>Review text.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "anonymous",
            "description": "<p>Anonymous status.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>Review occurrence date.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "iepId",
            "description": "<p>ID of the IEP to review.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of the user that made the review.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (RecentReview):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não pode fazer duas avaliações com datas de ocorrência num espaço de 6 meses.\"\n    }",
          "type": "json"
        },
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Ocorreu um erro durante a inserção de uma avaliação na base de dados, contacte os administradores\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/reviews.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "post",
    "url": "/reviews/delete",
    "title": "Delete review",
    "name": "DeleteReview",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reviewId",
            "description": "<p>ID of the review.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível apagar a avaliação.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/reviews.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "post",
    "url": "/reviews/iep",
    "title": "Get IEP reviews",
    "name": "GetIEPReviews",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>IEP ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Ocorreu um erro, não foi possível receber avaliações.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/reviews.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "post",
    "url": "/reviews/user",
    "title": "Get user reviews",
    "name": "GetUserReviews",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Ocorreu um erro, não foi possível receber avaliações.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/reviews.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "post",
    "url": "/reviews/hide",
    "title": "Hide review",
    "name": "HideReview",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reviewId",
            "description": "<p>ID of the review.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível esconder o comentário.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/reviews.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "post",
    "url": "/reviews/ignore",
    "title": "Ignore report",
    "name": "IgnoreReport",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reportId",
            "description": "<p>ID of the report.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível ignorar a denúncia.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/reviews.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "post",
    "url": "/reviews/utility",
    "title": "Like review",
    "name": "LikeReview",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reviewId",
            "description": "<p>ID of the review.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível marcar uma avaliação como útil.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/reviews.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "post",
    "url": "/reviews/report",
    "title": "Report review",
    "name": "ReportReview",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "motive",
            "description": "<p>Motive of the report.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of the user that made the report.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reviewId",
            "description": "<p>ID of the review.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Duplicate):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Já denunciou esta avaliação.\"\n    }",
          "type": "json"
        },
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível denunciar a avaliação.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/reviews.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "post",
    "url": "/reviews/hide",
    "title": "Show review",
    "name": "ShowReview",
    "group": "Reviews",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reviewId",
            "description": "<p>ID of the review.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível mostrar o comentário.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/reviews.js",
    "groupTitle": "Reviews"
  },
  {
    "type": "post",
    "url": "/search/",
    "title": "Search",
    "name": "Search",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "term",
            "description": "<p>Term to search.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Ocorreu um erro, tente novamente ou pesquise por outro termo\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/search/",
    "title": "Render search page",
    "name": "SearchPage",
    "group": "Search",
    "version": "0.0.0",
    "filename": "routes/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "post",
    "url": "/users/searched",
    "title": "Add recent search",
    "name": "AddSearch",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>IEP ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível guardar o seu histórico de pesquisa.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/ban",
    "title": "Ban user",
    "name": "BanUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível banir o utilizador.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/confirm/?id=:id?edit=:edit",
    "title": "Confirm email",
    "name": "ConfirmEmail",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Required hash to confirm email.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "edit",
            "description": "<p>True if the email was edited by the user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/edit",
    "title": "Edit user",
    "name": "EditUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User last name.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (FailedSignIn):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"O registo falhou.\"\n    }",
          "type": "json"
        },
        {
          "title": "Response (Duplicate):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Já existe um utilizador associado a esse e-mail.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/logout",
    "title": "Logout",
    "name": "Logout",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "{\n  \"status\": \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/recover/?id=:id",
    "title": "Render recover password page",
    "name": "RenderRecoverPassword",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Required hash to recover password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/recover/",
    "title": "Render recover password page (with email)",
    "name": "RenderRecoverPasswordEmail",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:slug",
    "title": "Render user page",
    "name": "RenderUserPage",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "slug",
            "description": "<p>User slug.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/resend",
    "title": "Resend confirmation mail",
    "name": "ResendMail",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User id.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível reenviar o e-mail de verificação.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/session",
    "title": "Check valid session",
    "name": "Session",
    "group": "Users",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (BannedUser):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"O seu perfil foi banido.\"\n    }",
          "type": "json"
        },
        {
          "title": "Response (Failed):",
          "content": "{\n  \"status\": \"error\",\n  \"text\": \"É necessário autenticar-se para poder realizar esta operação.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/signin",
    "title": "Sign in",
    "name": "SignIn",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User first name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User last name.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (FailedSignIn):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"O registo falhou.\"\n    }",
          "type": "json"
        },
        {
          "title": "Response (Duplicate):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Já existe um utilizador associado a esse e-mail.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/sociallogin",
    "title": "Social user login",
    "name": "SocialUserLogin",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (FailedSignIn):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"O registo falhou.\"\n    }",
          "type": "json"
        },
        {
          "title": "Response (BannedUser):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"O seu perfil foi banido.\"\n    }",
          "type": "json"
        },
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível autenticar, tente de novo.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/unban",
    "title": "Unban user",
    "name": "UnbanUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível reativar o utilizador.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/newpass/",
    "title": "Update user password",
    "name": "UpdatePassword",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "User login",
    "name": "UserLogin",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (WrongPassword):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Conjunto de e-mail e password inválido.\"\n    }",
          "type": "json"
        },
        {
          "title": "Response (BannedUser):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"O seu perfil foi banido.\"\n    }",
          "type": "json"
        },
        {
          "title": "Response (Failed):",
          "content": "    {\n      \"status\": \"error\",\n\t\t \"text\": \"Não foi possível autenticar, tente de novo.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/photo",
    "title": "Update user photo",
    "name": "UserPhoto",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response (Failed):",
          "content": "{\n  \"status\": \"error\",\n  \"text\": \"Não foi possível atualizar a sua foto de perfil.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  }
] });
