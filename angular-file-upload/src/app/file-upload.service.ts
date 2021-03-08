import {Injectable} from '@angular/core'; 
import {HttpClient} from '@angular/common/http'; 
import {Observable} from 'rxjs'; 
@Injectable({ 
providedIn: 'root'
}) 
export class FileUploadService { 
	
// API url 
baseApiUrl = "https://0xyfrpolm1.execute-api.us-east-1.amazonaws.com/dev"
	
constructor(private http:HttpClient) { } 

// Returns an observable 
upload(file):Observable<any> { 

	// Create form data 
	const formData = new FormData(); 
		
	// Store form name as "file" with file data 
	formData.append("file", file, file.name); 
		
	// Make http post request over api 
	// with formData as req 
	return this.http.post(this.baseApiUrl, formData) 
} 
} 
