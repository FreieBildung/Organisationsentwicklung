# Belegeingang

  <!-- required viewer styles -->
<link rel="stylesheet" href="https://unpkg.com/bpmn-js@16.0.0/dist/assets/diagram-js.css" />
<link rel="stylesheet" href="https://unpkg.com/bpmn-js@16.0.0/dist/assets/bpmn-js.css" />
<link rel="stylesheet" href="https://unpkg.com/bpmn-js@16.0.0/dist/assets/bpmn-font/css/bpmn.css" />
<script src="https://unpkg.com/bpmn-js@16.0.0/dist/bpmn-navigated-viewer.development.js"></script>
<script src="https://unpkg.com/jquery@3.3.1/dist/jquery.js"></script>

<div class="canvas">
    <div id="js-canvas"></div>
</div>

<script>
    var modeler = new BpmnJS({
      container: $('#js-canvas'), width:'100%',height:700
    });

    function openFromUrl(url) {
      $.ajax(url, { dataType : 'text' }).done(async function(xml) {
        try {
          await modeler.importXML(xml);
          modeler.get('canvas').zoom('fit-viewport');
        } catch (err) {
          console.error(err);
        }
      });
    }
openFromUrl('./belegeingang.bpmn');
</script>
