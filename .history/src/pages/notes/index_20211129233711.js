import GridLayout from 'react-grid-layout';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import './index.css'
function Notes () {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      {i: 'a', x: 0, y: 0, w: 2, h: 2, minW: 2, maxW: 2},
      {i: 'b', x: 2, y: 0, w: 2, h: 2, minW: 2, maxW: 2},
      {i: 'c', x: 4, y: 0, w: 2, h: 2, minW: 2, maxW: 2}
    ];
    return (
      <GridLayout className="layout" layout={layout} cols={6} rowHeight={30} width={1200}>
        <div key="a">a</div>
        <div key="b">b</div>
        <div key="c">c</div>
      </GridLayout>
    )
}
export default Notes;