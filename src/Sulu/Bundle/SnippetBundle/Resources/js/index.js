// @flow
import {bundleReady} from 'sulu-admin-bundle/services';
import {fieldRegistry} from 'sulu-admin-bundle/containers/Form';
import SnippetSelection from './components/SnippetSelection';

fieldRegistry.add('snippet', SnippetSelection);

bundleReady();
