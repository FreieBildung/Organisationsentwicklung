# Lohnauswertung

### Prozessablauf

<style>#js-canvas { background-color: #eeeeee; } </style>
<div class="canvas"><div id="js-canvas"></div></div>
<script>
    var modeler = new BpmnJS({container: $('#js-canvas'), width:'100%',height:500 });
    function openFromUrl(url) { $.ajax(url, { dataType : 'text' }).done(async function(xml) {
        try { await modeler.importXML(xml); modeler.get('canvas').zoom('fit-viewport'); } catch (err) { console.error(err); }});}
openFromUrl('./lohnauswertung.bpmn');
</script>
<img class="replacement-image" src="lohnauswertung.png"/>
