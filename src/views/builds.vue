<template>
    <div class="about" style="padding-top: 5px;">
      <div style="padding:5px 30px;">
        <b-card-group deck>
          <b-card border-variant="danger" header="POE-Ninja Builds" header-bg-variant="danger" header-text-variant="white" align="center">
          </b-card>
        </b-card-group>
      </div>
  </div>
    </template>
    
    <script>
    const {
      clipboard,
      shell
    } = require('electron')
  
    export default {
      methods: {
        openLink (URL) {
          shell.openExternal(URL)
        }
      }
    }
    </script>
    
    <style>
    .card-body {
      padding: 10px !important;
    }
    
    .card-text p {
      margin-block-start: 0.5em;
      margin-block-end: 0em;
    }
    
    tbody.hotkey>tr>td {
      padding-top: 8px;
      padding-left: 25px;
    }
    .num {
        margin-right: 20px;
         width: 200px !important;
         height: 200px !important;
        }
    </style>
