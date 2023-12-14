(function() {
    function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
    // Links
    var targetElement = document.querySelector('main');
    var h1 = targetElement.querySelector('h1');

    var link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = 'https://unpkg.com/bpmn-js@16.0.0/dist/assets/diagram-js.css';
    insertAfter(h1,link1);

    link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'https://unpkg.com/bpmn-js@16.0.0/dist/assets/bpmn-js.css';
    insertAfter(link1,link2);

    link3 = document.createElement('link');
    link3.rel = 'stylesheet';
    link3.href = 'https://unpkg.com/bpmn-js@16.0.0/dist/assets/bpmn-font/css/bpmn.css';
    insertAfter(link2,link3);

    // Scripts
    var externalScript1 = document.createElement('script');
    externalScript1.src = 'https://unpkg.com/bpmn-js@16.0.0/dist/bpmn-navigated-viewer.development.js';
    externalScript1.type = 'text/javascript'
    externalScript1.onload = function() {
      console.log(url + ' loaded successfully.');
      externalScript2 = document.createElement('script');
      externalScript2.src = 'https://unpkg.com/jquery@3.3.1/dist/jquery.js';
      externalScript2.type = 'text/javascript'
      externalScript2.onload = function() {
        console.log(url + ' loaded successfully.');
      };
      insertAfter(externalScript1,externalScript2);
      };
      var internalScript = document.createElement('script');
      internalScript.textContent = `
      internalScript.type = 'text/javascript'
      var modeler = new BpmnJS({
        container: $('#js-canvas'), width:'100%',height:700
      });
  
      window.openbpmn = function openbpmn(url) {
        $.ajax(url, { dataType : 'text' }).done(async function(xml) {
          try {
            await modeler.importXML(xml);
            modeler.get('canvas').zoom('fit-viewport');
          } catch (err) {
            console.error(err);
          }
        });
      }
      `;
      internalScript.onload = function() {
        console.log('modeler get loaded successfully.');
        window.openbpmn('belegverbuchung.bpmn')
      };
      insertAfter(link3,externalScript1);
	
    externalScript2 = document.createElement('script');
    externalScript2.src = 'https://unpkg.com/jquery@3.3.1/dist/jquery.js';
    externalScript2.type = 'text/javascript'
    externalScript2.onload = function() {
      console.log(url + ' loaded successfully.');
    };
    insertAfter(externalScript1,externalScript2);

    var internalScript = document.createElement('script');
    internalScript.textContent = `
    internalScript.type = 'text/javascript'
    var modeler = new BpmnJS({
      container: $('#js-canvas'), width:'100%',height:700
    });

    window.openbpmn = function openbpmn(url) {
      $.ajax(url, { dataType : 'text' }).done(async function(xml) {
        try {
          await modeler.importXML(xml);
          modeler.get('canvas').zoom('fit-viewport');
        } catch (err) {
          console.error(err);
        }
      });
    }
    `;
    internalScript.onload = function() {
      console.log('modeler get loaded successfully.');
    };

    // Create the content
    var div = document.createElement('div');
    div.id = 'js-canvas';

    var outerdiv= document.createElement('div');
    outerdiv.className = 'canvas';
    outerdiv.appendChild(div);

    insertAfter(externalScript2,outerdiv);
    insertAfter(outerdiv,internalScript);
})();
