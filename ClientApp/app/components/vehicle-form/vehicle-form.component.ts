import { VehicleService } from './../../services/vehicle.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  public makes: any[];
  public models: any[];
  public vehicle: any = {
    features: [],
    contact: {}
  };
  public features: any[];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {

    this.vehicleService.getMakes().subscribe(makes => {
      this.makes = makes;
    });

    this.vehicleService.getFeatures().subscribe(features => {
      this.features = features;
    });

  }

  onMakeChange() {
    var selectedMake = this.makes.find(m => m.id == this.vehicle.makeId);
    this.models = selectedMake ? selectedMake.models : [];
    delete this.vehicle.modelId;
  }


  onFeatureToggle(featureId: any, $event: any) {
    if ($event.target.checked) {
      this.vehicle.features.push(featureId);
    } else {
      var index = this.vehicle.features.indexOf(featureId);
      this.vehicle.features.splice(index, 1);
    }
  }

  submit() {
    this.vehicleService.create(this.vehicle)
      .subscribe(x => console.log(x));
  }
}




