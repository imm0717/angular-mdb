import { HttpClient } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: "root" })
export class HttpService {
  protected version = environment.endpoint.apiVersion;
  protected schema = environment.endpoint.schema;
  protected port = environment.endpoint.port;
  protected host = environment.endpoint.host;
  protected assetsHost = "";
  private errorHandler: ErrorHandler;

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  getHost() {
    let url = this.schema ? this.schema + "://" : "";
    url += this.host;
    url += this.port ? ":" + this.port : "";
    return url;
  }

  getUrl() {
      let url = this.version ? this.getHost() + "/" + this.version : this.getHost();
    return url;
  }

  path(path) {
    const joiner = path && path[0] === "/" ? "" : "/";
    return this.getUrl() + joiner + path;
  }

  resource(path) {
    const regex = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
    const joiner = (path && path[0] === "/") || regex.test(path) ? "" : "/";
    return regex.test(path) ? path : this.getUrl() + joiner + path;
  }

  assets(path) {
    const regex = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
    const joiner = (path && path[0] === "/") || regex.test(path) ? "" : "/";
    return regex.test(path) ? path : this.assetsHost + joiner + path;
  }

  safeStyle(path): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(
      "url(" + this.assets(path) + ")"
    );
  }

  get<T>(uri: string, params?: any | null, header?: object): Observable<T> {
    const options = {};
    if (params) {
      options["params"] = params;
    }
    if (header) {
      options["headers"] = header;
    }
    return this.httpClient.get<T>(this.path(uri), options);
  }

  post<T>(uri: string, body?: any | null, header?: object): Observable<T> {
    const options = {};
    if (header) {
      options["headers"] = header;
    }
    return this.httpClient.post<T>(this.path(uri), body, options);
  }

  put<T>(uri: string, body?: any | null, header?: object): Observable<T> {
    const options = {};
    if (header) {
      options["headers"] = header;
    }
    return this.httpClient.put<T>(this.path(uri), body, options);
  }

  delete<T>(uri: string, params?: any | null, header?: object): Observable<T> {
    const options = {};
    if (params) {
      options["params"] = params;
    }
    if (header) {
      options["headers"] = header;
    }
    return this.httpClient.delete<T>(this.path(uri), options);
  }
}
