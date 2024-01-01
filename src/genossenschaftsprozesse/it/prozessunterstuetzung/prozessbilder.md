# Darstellung der Prozessdiagramme

Da die eingestellten Prozessdiagramme teilweise sehr umfangreich sind, benötigen wir eine Zoom-Funktion. Die einfachste Weise ist, den Camunda Modeler in einer Read-Only-ansicht einzubinden. Im Diagramm kann man dann mit Strg + Mausrad zoomen oder mit Shift+ Mausrad horizontal scrollen.

Leider bringt dies etwas Code-Overhead mit sich, da das Script zum Einbinden sich nicht komplett "verstecken" lässt.

Beispiel für eine Seite mit camunda-Code:
```
# Belegeingang

Das ist ein Text vor dem Diagramm.

### Prozessablauf

<style>#js-canvas { background-color: #eeeeee; } </style>
<div class="canvas"><div id="js-canvas"></div></div>
<script>
    var modeler = new BpmnJS({container: $('#js-canvas'), width:'100%',height:500 });
    function openFromUrl(url) { $.ajax(url, { dataType : 'text' }).done(async function(xml) {
        try { await modeler.importXML(xml); modeler.get('canvas').zoom('fit-viewport'); } catch (err) { console.error(err); }});}
    openFromUrl('belegeingang.bpmn');
</script>

Das ist ein Text nach dem Diagramm.
```

ergibt:

# Belegeingang

Das ist ein Text vor dem Diagramm.

### Prozessablauf

<style>#js-canvas { background-color: #eeeeee; } </style>
<div class="canvas"><div id="js-canvas"></div></div>
<script>
    var modeler = new BpmnJS({container: $('#js-canvas'), width:'100%',height:500 });
    function openFromUrl(url) { $.ajax(url, { dataType : 'text' }).done(async function(xml) {
        try { await modeler.importXML(xml); modeler.get('canvas').zoom('fit-viewport'); } catch (err) { console.error(err); }});}
    openFromUrl('../../finanzverwaltung/kreditorenbuchhaltung/belegeingang.bpmn');
</script>
<img class="replacement-image" src="../../finanzverwaltung/kreditorenbuchhaltung/belegeingang.bpmn"/>

Das ist ein Text nach dem Diagramm.

