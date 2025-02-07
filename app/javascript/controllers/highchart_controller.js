import { Controller } from "@hotwired/stimulus"
import Highcharts from 'highcharts';

/*
 * HighchartController is a Stimulus controller that allows you to
 * easily create Highcharts charts in views. You must define the
 * configValue via data-highchart-config-value attribute.
 */
export default class extends Controller {
  static targets = [ "chart", "selectAllButton", "deselectAllButton"]
  static values = {
    config: Object
  }

  connect() {
    this.chart = Highcharts.chart(this.chartTarget, this.configValue);
  }

  deselectAll() {
    this.chart.series.forEach((s) => {
      // Change series visibility to hidden (first param) without redrawing (second param)
      s.setVisible(false, false);
    })
    // Redraw chart only once at the end for performance reasons.
    this.chart.redraw();
  }

  selectAll() {
    this.chart.series.forEach((s) => {
      // Change series visibility to visible (first param) without redrawing (second param)
      s.setVisible(true, false);
    })
    // Redraw chart only once at the end for performance reasons.
    this.chart.redraw();
  }

}
