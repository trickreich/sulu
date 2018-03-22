<?php

/*
 * This file is part of Sulu.
 *
 * (c) MASSIVE ART WebServices GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Sulu\Bundle\AdminBundle\ResourceMetadata\Form;

use Sulu\Bundle\AdminBundle\ResourceMetadata\ResourceMetadataInterface;

interface FormInterface extends ResourceMetadataInterface
{
    public function getForm(): Form;

    public function setForm(Form $form): void;
}
