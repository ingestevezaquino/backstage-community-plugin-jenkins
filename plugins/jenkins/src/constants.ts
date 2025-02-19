/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export const JENKINS_ANNOTATION = 'jenkins.io/job-full-name';
export const JENKINS_OVERVIEW_MAIN_BRANCH = 'jenkins.io/job-main-branch';
// @deprecated The legacy annotation used for identifying Jenkins jobs, use
// JENKINS_ANNOTATION instead.
export const LEGACY_JENKINS_ANNOTATION = 'jenkins.io/github-folder';
